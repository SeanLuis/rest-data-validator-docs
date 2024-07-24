<script lang="ts" setup>
import { MenuItemWithLink, MenuItem } from '../../core'
import VPSidebarLink from './VPSidebarLink.vue'
import { isActive } from '../support/utils'
import { useData } from 'vitepress'

const props = defineProps<{
  text: string
  items: MenuItem[]
}>()

const { page } = useData()
function hasActiveLink() {
  const { relativePath } = page.value
  return props.items.some((item) => isLink(item) && isActive(relativePath, item.link))
}

function isLink(item: MenuItem): item is MenuItemWithLink {
  return (item as MenuItemWithLink).link !== undefined
}
</script>

<template>
  <section class="VPSidebarGroup">
    <div class="title">
      <h2 class="title-text" :class="{ active: hasActiveLink() }">
        {{ text }}
      </h2>
    </div>

    <template v-for="item in items" :key="item.text">
      <template v-if="isLink(item)">
        <VPSidebarLink :item="item" />
      </template>
      <template v-else>
        <div class="nested-group">
          <h3>{{ item.text }}</h3>
          <ul>
            <li v-for="child in item.items" :key="child.text">
              <VPSidebarLink v-if="isLink(child)" :item="child" />
              <template v-else>
                <div class="nested-group">
                  <h4>{{ child.text }}</h4>
                  <ul>
                    <li v-for="subchild in child.items" :key="subchild.text">
                      <VPSidebarLink :item="subchild" />
                    </li>
                  </ul>
                </div>
              </template>
            </li>
          </ul>
        </div>
      </template>
    </template>
  </section>
</template>

<style scoped>
.title {
  padding: 6px 0;
}

@media (min-width: 960px) {
  .title {
    padding: 4px 0;
  }
}

.title-text {
  line-height: 20px;
  font-size: 13px;
  font-weight: 600;
  color: var(--vt-c-text-1);
  transition: color 0.5s;
}

.nested-group h3, .nested-group h4 {
  font-size: 12px;
  font-weight: 500;
  margin: 0.5em 0;
}

.nested-group ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nested-group li {
  margin: 0.5em 0;
  padding-left: 1em;
  border-left: 1px solid #ccc;
}
</style>
