<script setup lang="jsx">
import { SearchIcon } from 'tdesign-icons-vue-next';
import { ref, reactive, onMounted } from 'vue';
import { ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue-next';

const options2 = [
  { label: '云服务器', value: '1' },
  { label: '云数据库', value: '2' },
  { label: '域名注册', value: '3' },
  { label: '网站备案', value: '4' },
  { label: '对象存储', value: '5' },
  { label: '低代码平台', value: '6' },
];

const value2 = ref('');


const statusNameListMap = {
  0: { label: '审批通过', theme: 'success', icon: <CheckCircleFilledIcon /> },
  1: { label: '审批失败', theme: 'danger', icon: <CloseCircleFilledIcon /> },
  2: { label: '审批过期', theme: 'warning', icon: <ErrorCircleFilledIcon /> },
};
const columns = [
  {
    colKey: 'row-select',
    type: 'multiple',
    width: 46,
  },
  {
    width: 200,
    colKey: 'name',
    title: '姓名',
    render(h, { type, row: { name } }) {
      if (type === 'title') return '申请人';
      return name ? `${name.first} ${name.last}` : 'UNKNOWN_USER';
    },
  },
  {
    colKey: 'status',
    title: '申请状态',
    width: '150',
    cell: (h, { _row, rowIndex }) => {
      const status = rowIndex % 3;
      return (
        <t-tag shape="round" theme={statusNameListMap[status].theme} variant="light-outline">
          {statusNameListMap[status].icon}
          {statusNameListMap[status].label}
        </t-tag>
      );
    },
  },
  {
    width: 200,
    colKey: 'phone',
    title: '联系方式',
    render(h, { row: { phone } }) {
      return phone;
    },
  },
  {
    colKey: 'email',
    title: '邮箱',
    width: 180,
    ellipsis: true,
  },
];

const data = ref([]);
const isLoading = ref(false);
const selectedRowKeys = ref([]);

const pagination = reactive({
  current: 1,
  pageSize: 10,
  total: 0,
  showJumper: true,
  onChange: (pageInfo) => {
    console.log('pagination.onChange', pageInfo);
  },
});

const fetchData = async (paginationInfo) => {
  try {
    isLoading.value = true;
    const { current, pageSize } = paginationInfo;
    // 请求可能存在跨域问题
    const response = await fetch(`https://randomuser.me/api?page=${current}&results=${pageSize}`);
    const { results } = await response.json();
    data.value = results;
    // 数据加载完成，设置数据总条数
    pagination.total = 120;
  } catch (err) {
    console.log(err);
    data.value = [];
  }
  isLoading.value = false;
};

// BaseTable 中只有 page-change 事件，没有 change 事件
const rehandleChange = (changeParams, triggerAndData) => {
  console.log('分页、排序、过滤等发生变化时会触发 change 事件：', changeParams, triggerAndData);
};

// BaseTable 中只有 page-change 事件，没有 change 事件
const onPageChange = async (pageInfo) => {
  console.log('page-change', pageInfo);
  pagination.current = pageInfo.current;
  pagination.pageSize = pageInfo.pageSize;
  await fetchData(pageInfo);
};

onMounted(async () => {
  await fetchData({
    current: pagination.current || pagination.defaultCurrent,
    pageSize: pagination.pageSize || pagination.defaultPageSize,
  });
});

const onSelectChange = (value, params) => {
  selectedRowKeys.value = value;
  console.log(value, params);
};

const rowKey = 'phone';

const drawerVisible = ref(false);

function showDrawer(){
  drawerVisible.value = true;
}

</script>
<template>
  <div class="bg-white rounded shadow p-2 overflow-y-auto">
    <div class="flex justify-end  mb-2">
      <div class="flex items-center">
        <t-space size="8px">
          <t-select v-model="value2" placeholder="请选择类型" clearable class="w-60">
            <t-option v-for="item in options2" :key="item.value" :value="item.value" :label="item.label"></t-option>
          </t-select>
          <t-input placeholder="单据编号" class="w-60" />
          <t-button theme="primary">
            <template #icon><SearchIcon /></template>
            搜索
          </t-button>
        </t-space>
      </div>
    </div>
    <div class="flex justify-between items-center bg-[#f9f9f9] px-3 py-2 ">
      <div></div>
      <t-link theme="primary" underline @click="showDrawer">高级搜索</t-link>
      <t-drawer v-model:visible="drawerVisible" header="高级搜索" size="medium">
        <t-form>
          <t-form-item label="申请编号" name="name" >
            <t-input placeholder="请输入内容" />
          </t-form-item>
        </t-form>
      </t-drawer>
    </div>
    <div >
      <t-table
        :data="data"
        :columns="columns"
        :row-key="rowKey"
        :loading="isLoading"
        :pagination="pagination"
        :selected-row-keys="selectedRowKeys"
        bordered
        stripe
        @change="rehandleChange"
        @page-change="onPageChange"
        @select-change="onSelectChange"
      />
    </div>
  </div>
</template>

