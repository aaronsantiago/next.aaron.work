let sidebarTitle = $state("");



export function getSidebarTitle() {
  function setSidebarTitle(title) {
    sidebarTitle = title;
  }
  
  return {
    get sidebarTitle() {
      return sidebarTitle;
    },
    setSidebarTitle
  };
}