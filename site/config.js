export const algolia = {
  apiKey: 'c105570827c2bd528077fbdec1d0eae4',
  indexName: 'fishd-mobile',
  inputSelector: '#search-box input',
  algoliaOptions: { facetFilters: [ 'lang:zh-CN' ] },
  debug: false // Set debug to true if you want to inspect the dropdown
};

export default [
  {
    name: '全局规范',
    nameEn: 'Global Rule',
    key: 'globalRule',
    children: [
      {
        key: 'layout',
        type: 'markdown',
        name: 'Layout 布局',
        nameEn: 'Layout',
        published: true
      },
      {
        key: 'grid',
        type: 'markdown',
        name: 'Grid 宫格',
        nameEn: 'Grid',
        published: true
      }
    ]
  },
  {
    name: '基础组件',
    nameEn: 'BaseGeneral',
    key: 'baseGeneral',
    children: [
      {
        key: 'button',
        type: 'markdown',
        name: 'Button 按钮',
        nameEn: 'Button',
        published: true
      },
      {
        key: 'input',
        type: 'markdown',
        name: 'Input 输入框',
        nameEn: 'Input',
        published: true
      },
      {
        key: 'form',
        type: 'markdown',
        name: 'Form 表单',
        nameEn: 'Form',
        published: true
      },
      {
        key: 'switch',
        type: 'markdown',
        name: 'Switch 滑动开关',
        nameEn: 'Switch',
        published: true
      },
      {
        key: 'numberKeyboard',
        type: 'markdown',
        name: 'NumberKeyboard 数字键盘',
        nameEn: 'NumberKeyboard',
        published: true
      },
      {
        key: 'icon',
        type: 'markdown',
        name: 'Icon 图标',
        nameEn: 'Icon',
        published: true
      },
    ]
  },
  {
    name: '导航组件',
    nameEn: 'NavigationComponents',
    key: 'NavigationComponents',
    children: [
      {
        key: 'navbar',
        type: 'markdown',
        name: 'NavBar 导航栏',
        nameEn: 'NavBar',
        published: true
      },
      {
        key: 'tabBar',
        type: 'markdown',
        name: 'TabBar 标签栏',
        nameEn: 'TabBar',
        published: true
      },
      {
        key: 'tabs',
        type: 'markdown',
        name: 'Tabs 标签页',
        nameEn: 'Tabs',
        published: true
      }
    ]
  },
  {
    name: '数据录入',
    nameEn: 'Data Entry',
    key: 'Data Entry',
    children: [
      {
        key: 'searchBar',
        type: 'markdown',
        name: 'SearchBar 搜索栏',
        nameEn: 'SearchBar',
        published: true
      },
      {
        key: 'actionSheet',
        type: 'markdown',
        name: 'ActionSheet 动作面板',
        nameEn: 'ActionSheet',
        published: true
      },
      {
        key: 'radio',
        type: 'markdown',
        name: 'Radio 单选框',
        nameEn: 'Radio',
        published: true
      },
      {
        key: 'checkbox',
        type: 'markdown',
        name: 'Checkbox 复选框',
        nameEn: 'Checkbox',
        published: true
      },
      {
        key: 'dropdown',
        type: 'markdown',
        name: 'Dropdown 下拉框筛选',
        nameEn: 'Dropdown',
        published: true
      },
      {
        key: 'cascade',
        type: 'markdown',
        name: 'Cascade 级联筛选器',
        nameEn: 'Cascade',
        published: true
      },
      {
        key: 'datePickerView',
        type: 'markdown',
        name: 'DataPickerView 日期选择面板',
        nameEn: 'DataPickerView',
        published: true
      },
      {
        key: 'datePicker',
        type: 'markdown',
        name: 'DatePicker 日期选择器',
        nameEn: 'DatePicker',
        published: true
      },
      {
        key: 'pickerView',
        type: 'markdown',
        name: 'PickerView 选择器面板',
        nameEn: 'PickerView',
        published: true
      },
      {
        key: 'picker',
        type: 'markdown',
        name: 'Picker 选择器',
        nameEn: 'Picker',
        published: true
      },
      {
        key: 'upload',
        type: 'markdown',
        name: 'Upload 文件上传',
        nameEn: 'Upload',
        published: true
      }
    ]
  },
  {
    name: '数据展示',
    nameEn: 'Data Display',
    key: 'Data Display',
    children: [
      {
        key: 'imageView',
        type: 'markdown',
        name: 'ImageView 图片预览',
        nameEn: 'ImageView',
        published: true
      },
      {
        key: 'list',
        type: 'markdown',
        name: 'List 列表',
        nameEn: 'List',
        published: true
      },
      {
        key: 'listView',
        type: 'markdown',
        name: 'ListView 长列表',
        nameEn: 'ListView',
        published: true
      },
      {
        key: 'badge',
        type: 'markdown',
        name: 'Badge 徽标数',
        nameEn: 'Badge',
        published: true
      },
      {
        key: 'noticeBar',
        type: 'markdown',
        name: 'NoticeBar 通告栏',
        nameEn: 'NoticeBar',
        published: true
      },
      {
        key: 'progress',
        type: 'markdown',
        name: 'Progress 进度条',
        nameEn: 'Progress',
        published: true
      },
      {
        key: 'steps',
        type: 'markdown',
        name: 'Steps 步骤条',
        nameEn: 'Steps',
        published: true
      },
      {
        key: 'carousel',
        type: 'markdown',
        name: 'Carousel 滑块视图容器',
        nameEn: 'Carousel',
        published: true
      },
      {
        key: 'overlay',
        type: 'markdown',
        name: 'Overlay 遮罩',
        nameEn: 'Overlay',
        published: true
      },
      {
        key: 'divider',
        type: 'markdown',
        name: 'Divider 分割线',
        nameEn: 'Divider',
        published: true
      },
      {
        key: 'label',
        type: 'markdown',
        name: 'Label 标签',
        nameEn: 'Label',
        published: true
      },
      {
        key: 'rate',
        type: 'markdown',
        name: 'Rate 评分',
        nameEn: 'Rate',
        published: true
      },
      {
        key: 'avatar',
        type: 'markdown',
        name: 'Avatar 头像',
        nameEn: 'Avatar',
        published: true
      }
    ]
  },
  {
    name: '操作反馈',
    nameEn: 'Action Feedback',
    key: 'Action Feedback',
    children: [
      {
        key: 'pullRefresh',
        type: 'markdown',
        name: 'PullRefresh 下拉刷新',
        nameEn: 'PullRefresh',
        published: true
      },
      {
        key: 'loadMore',
        type: 'markdown',
        name: 'LoadMore 加载更多',
        nameEn: 'LoadMore',
        published: true
      },
      {
        key: 'toast',
        type: 'markdown',
        name: 'Toast 轻提示',
        nameEn: 'Toast',
        published: true
      },
      {
        key: 'modal',
        type: 'markdown',
        name: 'Modal 对话框',
        nameEn: 'Modal',
        published: true
      }
    ]
  }
];
