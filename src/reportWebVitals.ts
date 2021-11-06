// https://bit.ly/CRA-vitals
import type { ReportHandler } from 'web-vitals';

export function reportWebVitals(onPerfEntry?: ReportHandler): void {
  if (!(onPerfEntry instanceof Function)) {
    return;
  }

  import('web-vitals')
    .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    })
    .catch(({ stack }) => console.warn(stack));
}
