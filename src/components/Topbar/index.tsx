const Topbar = () => (
  <obc-top-bar
    title="OpenBridge Panel"
    appTitle="Open Bridge Panel"
    pageName="Dashboard"
    showClock
    showDimmingButton
    showAppsButton
    showDate
  >
    <obc-alert-button nAlerts={1} slot="alerts"></obc-alert-button>
    <obc-clock slot="clock" date={new Date().toISOString()}></obc-clock>
  </obc-top-bar>
);
export default Topbar;
