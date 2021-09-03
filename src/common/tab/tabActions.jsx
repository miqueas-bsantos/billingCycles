export function selectTab(tabId) {
    return {
        type: "TAB_SELECTED",
        payload: tabId
    }
}

export function showTabs(...tabs) {
    const tabtoShow = {}
    tabs.forEach(element => {
        tabtoShow[element] = true
    });
    return {
        type: "TAB_SHOW",
        payload: tabtoShow
    }
}