declare interface Window {
  gtag: (
    command: string,
    eventName: string,
    eventParams?: { [key: string]: any },
  ) => void;
}
