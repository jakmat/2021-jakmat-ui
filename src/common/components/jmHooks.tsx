const useVisibility = (currentComponentId: string, clickedTabComponentId: string) => {
  const isComponentVisible = currentComponentId === clickedTabComponentId;
  if (isComponentVisible) return { visibility: 'visible', width: '100%', height: '100%' };
  return { visibility: 'hidden', width: 0, height: 0 };
}

const useDisplay = (currentComponentId: string, clickedTabComponentId: string) => {
  const isComponentDisplayed = currentComponentId === clickedTabComponentId;
  if (isComponentDisplayed) return { display: 'flex' };
  return { display: 'block' };
}

const jmHooks = { useVisibility, useDisplay };

export default jmHooks;