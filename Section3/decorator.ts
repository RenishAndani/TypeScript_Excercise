(Symbol as any).metadata ??= Symbol("Symbol.metadata");

const metadataKey = Symbol("bookMetadata");

function FieldMetadata(metadataValue: string) {
  return function (value: unknown, context: ClassFieldDecoratorContext) {
    const metadata = (context.metadata![metadataKey] as Record<string, string> | undefined) ?? {};

    metadata[String(context.name)] = metadataValue;

    context.metadata![metadataKey] = metadata;
  };
}

function BookDecorator(value: Function, context: ClassDecoratorContext) {
  const metadata = context.metadata![metadataKey];

  console.log("Book metadata:");
  console.log(metadata);
}

@BookDecorator
class Book {
  @FieldMetadata("The Great Gatsby")
  title = "The Great Gatsby";

  @FieldMetadata("F. Scott Fitzgerald")
  author = "F. Scott Fitzgerald";
}
