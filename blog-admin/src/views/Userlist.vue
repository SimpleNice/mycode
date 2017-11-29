<template>
	<div class="right">
		<right-top></right-top>
		<v-table :data-source="gridData" :columns="gridColumns" :row-selection="rowSelection" row-key="key" :pagination="pagination">
		  <template scope="props" slot="operation">
		    <v-button>操作</v-button>
		  </template>
		</v-table>
	</div>
</template>

<script>
import RightTop from '@/components/RightTop'
var columns = [{
  title: '姓名',
  dataIndex: 'name',
  width:150
}, {
  title: '年龄',
  dataIndex: 'age',
  sorter: function(a, b) { return a.age - b.age },
  width:250
}, {
  title: '地址',
  dataIndex: 'address',
  width:250

},{
    title: '操作',
    key: 'operation'
  }
]

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `李大嘴${i}`,
    age: 32+i,
    address: `西湖区湖底公园${i}号`,
  });
}

const pagination = {
  total: data.length,
  pageSize: 10,
  currPage: 1
}

// 配置选择数据的选项
var rowSelection = {
  onChange: function(selectedRowKeys, selectedRows) {
    console.log('rowSelection.onChange',selectedRowKeys, selectedRows);
  },
  onSelect: function(record, selected, selectedRows) {
    console.log('rowSelection.onSelect',record, selected, selectedRows);
  },
  onSelectAll: function(selected, selectedRows, changeRows) {
    console.log('rowSelection.onSelectAll',selected, selectedRows, changeRows);
  }
};
export default{
	name:'Userlist',
	data () {
    return {
	      loading: false,
	      gridData: data,
	      gridColumns: columns,
	      rowSelection: rowSelection,
	      pagination: pagination
    	}
 	},
	components:{
		rightTop:RightTop
	}
}
</script>

<style>
</style>