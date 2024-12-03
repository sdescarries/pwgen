// https://bit.ly/CRA-vitals
type ReportHandler = (stat: unknown) => void;

export function reportWebVitals(onPerfEntry?: ReportHandler): void {
  if (!(onPerfEntry instanceof Function)) {
    return;
  }

  import('web-vitals')
    .then(({ onLCP, onINP, onCLS }) => {
      onLCP(onPerfEntry);
      onINP(onPerfEntry);
      onCLS(onPerfEntry);
    })
    .catch(({ stack }) => console.warn(stack));
}
