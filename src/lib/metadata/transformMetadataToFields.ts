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

    // The nearest "...Module" ancestor names the group a field belongs to.
    // Top-level sections (and root-level leaves such as hasResults) have no
    // Module ancestor, so they fall back to their own section title.
    const currentModule =
      node.name.endsWith("Module")
        ? node.title ??
          node.name.replace(
            /Module$/,
            "",
          )
        : module ||
          (path.length === 0
            ? node.title ?? node.name
            : "");

    const hasChildren =
      node.children !== undefined &&
      node.children.length > 0;

    // Only leaves are real fields; everything else is a container.
    if (!hasChildren) {
      fields.push({
        label:
          node.title ??
          node.name,

        value:
          currentPath.join("."),

        // Essie search-area name, required for AREA[...] expressions.
        piece: node.piece,

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
