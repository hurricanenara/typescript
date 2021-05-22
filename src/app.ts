class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

  constructor() {
    // this.templateEl = <HTMLTemplateElement>document.getElementById('project-input')!;
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    ); // true -> deep clone or not
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.attach();
  }
  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}
