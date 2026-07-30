import type { MetadataNode, StudyStatField } from "@/types/study.schema";


export function transformMetadataToFields(
  metadata: MetadataNode[],
): StudyStatField[] {
  const fields: StudyStatField[] = [];

  function visit(
    node: MetadataNode,
    path: string[] = [],
    module = "",
  ) {
    const currentPath = [
      ...path,
      node.name,
    ];

    const currentModule =
      node.name.endsWith("Module")
        ? node.title ??
          node.name.replace(
            /Module$/,
            "",
          )
        : module;

    const hasChildren =
      node.children &&
      node.children.length > 0;

    // Skip container nodes
    if (!hasChildren) {
      fields.push({
        label:
          node.title ??
          node.name,

        value:
          currentPath.join("."),

        module: currentModule,

        type: node.type,

        sourceType:
          node.sourceType,

        description:
          node.description,

        isEnum:
          node.isEnum,
      });

      return;
    }

    node.children!.forEach(
      (child) =>
        visit(
          child,
          currentPath,
          currentModule,
        ),
    );
  }

  metadata.forEach((node) =>
    visit(node),
  );

  return fields.sort((a, b) => {
    if (a.module !== b.module) {
      return a.module.localeCompare(
        b.module,
      );
    }

    return a.label.localeCompare(
      b.label,
    );
  });
}
