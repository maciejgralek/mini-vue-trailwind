import vTable from "./vTable.vue"
import vTabs from "./vTabs.vue"
import vTab from "./vTab.vue"
import vDatePicker from "./vDatePicker.vue"
import vCard from "./vCard.vue"
import vSidepanel from "./vSidepanel.vue"
import vButton from "./vButton.vue"
import vPagination from "./vPagination.vue"
import vDropdown from "./vDropdown.vue"
import vDropdownMenuItem from "./vDropdownMenuItem.vue"
import vDropdownHeader from "./vDropdownHeader.vue"
import vList from "./vList.vue"
import vListItem from "./vListItem.vue"
import vCollapse from "./vCollapse.vue"
import vModal from "./vModal.vue"
import vBadge from "./vBadge.vue"
import vPopover from "./vPopover.vue"
import vCloseButton from "./vCloseButton.vue"
import vDivider from "./vDivider.vue"
import vSpinner from "./vSpinner.vue"
import vProgress from "./vProgress.vue"
import tooltip from "../directives/tooltip.js"

  function install(app) {
    app.component("v-table", vTable);
    app.component("v-tabs", vTabs);
    app.component("v-tab", vTab);
    app.component("v-date-picker", vDatePicker);
    app.component("v-card", vCard);
    app.component("v-button", vButton);
    app.component("v-pagination", vPagination);
    app.component("v-dropdown", vDropdown);
    app.component("v-dropdown-menu-item", vDropdownMenuItem);
    app.component("v-dropdown-header", vDropdownHeader);
    app.component("v-list", vList);
    app.component("v-list-item", vListItem);
    app.component("v-collapse", vCollapse);
    app.component("v-modal", vModal);
    app.component("v-badge", vBadge);
    app.component("v-popover", vPopover);
    app.component("v-spinner", vSpinner);
    app.component("v-sidepanel", vSidepanel);
    app.component("v-progress", vProgress);
    app.component("v-close-button", vCloseButton);
    app.directive("tooltip", tooltip);
  }

export default { install };

// export { vTable }