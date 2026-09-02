export function showLoading(): void {
  const statusElement = document.getElementById("status") as HTMLParagraphElement;

  statusElement.textContent = "searching...";
}

export function showError(message: string): void {
  const statusElement = document.getElementById("status") as HTMLParagraphElement;

  statusElement.textContent = message;
}

export function clearStatus(): void {
  const statusElement = document.getElementById("status") as HTMLParagraphElement;

  statusElement.textContent = "";
}
