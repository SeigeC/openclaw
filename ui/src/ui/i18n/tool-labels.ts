// Tool label translations for i18n support
// Maps tool names and actions to localized strings

const translations: Record<string, Record<string, string>> = {
  "zh-CN": {
    // Core tools
    "bash.title": "Bash",
    "process.title": "进程",
    "read.title": "读取",
    "write.title": "写入",
    "edit.title": "编辑",
    "attach.title": "附加",

    // Browser
    "browser.title": "浏览器",
    "browser.actions.status": "状态",
    "browser.actions.start": "启动",
    "browser.actions.stop": "停止",
    "browser.actions.tabs": "标签页",
    "browser.actions.open": "打开",
    "browser.actions.focus": "聚焦",
    "browser.actions.close": "关闭",
    "browser.actions.snapshot": "快照",
    "browser.actions.screenshot": "截图",
    "browser.actions.navigate": "导航",
    "browser.actions.console": "控制台",
    "browser.actions.pdf": "PDF",
    "browser.actions.upload": "上传",
    "browser.actions.dialog": "对话框",
    "browser.actions.act": "操作",

    // Canvas
    "canvas.title": "画布",
    "canvas.actions.present": "呈现",
    "canvas.actions.hide": "隐藏",
    "canvas.actions.navigate": "导航",
    "canvas.actions.eval": "执行",
    "canvas.actions.snapshot": "快照",
    "canvas.actions.a2ui_push": "A2UI 推送",
    "canvas.actions.a2ui_reset": "A2UI 重置",

    // Nodes
    "nodes.title": "节点",
    "nodes.actions.status": "状态",
    "nodes.actions.describe": "描述",
    "nodes.actions.pending": "待处理",
    "nodes.actions.approve": "批准",
    "nodes.actions.reject": "拒绝",
    "nodes.actions.notify": "通知",
    "nodes.actions.camera_snap": "拍照",
    "nodes.actions.camera_list": "摄像头列表",
    "nodes.actions.camera_clip": "录制视频",
    "nodes.actions.screen_record": "录屏",

    // Cron
    "cron.title": "定时任务",
    "cron.actions.status": "状态",
    "cron.actions.list": "列表",
    "cron.actions.add": "添加",
    "cron.actions.update": "更新",
    "cron.actions.remove": "移除",
    "cron.actions.run": "运行",
    "cron.actions.runs": "运行记录",
    "cron.actions.wake": "唤醒",

    // Gateway
    "gateway.title": "网关",
    "gateway.actions.restart": "重启",
    "gateway.actions.config.get": "获取配置",
    "gateway.actions.config.schema": "配置架构",
    "gateway.actions.config.apply": "应用配置",
    "gateway.actions.update.run": "运行更新",

    // WhatsApp
    "whatsapp_login.title": "WhatsApp 登录",
    "whatsapp_login.actions.start": "启动",
    "whatsapp_login.actions.wait": "等待",

    // Discord
    "discord.title": "Discord",
    "discord.actions.react": "反应",
    "discord.actions.reactions": "反应列表",
    "discord.actions.sticker": "贴纸",
    "discord.actions.poll": "投票",
    "discord.actions.permissions": "权限",
    "discord.actions.readMessages": "读取消息",
    "discord.actions.sendMessage": "发送",
    "discord.actions.editMessage": "编辑",
    "discord.actions.deleteMessage": "删除",
    "discord.actions.threadCreate": "创建线程",
    "discord.actions.threadList": "线程列表",
    "discord.actions.threadReply": "线程回复",
    "discord.actions.pinMessage": "置顶",
    "discord.actions.unpinMessage": "取消置顶",
    "discord.actions.listPins": "置顶列表",
    "discord.actions.searchMessages": "搜索",
    "discord.actions.memberInfo": "成员",
    "discord.actions.roleInfo": "角色",
    "discord.actions.emojiList": "表情列表",
    "discord.actions.roleAdd": "添加角色",
    "discord.actions.roleRemove": "移除角色",
    "discord.actions.channelInfo": "频道",
    "discord.actions.channelList": "频道列表",
    "discord.actions.voiceStatus": "语音",
    "discord.actions.eventList": "事件",
    "discord.actions.eventCreate": "创建事件",
    "discord.actions.timeout": "超时",
    "discord.actions.kick": "踢出",
    "discord.actions.ban": "封禁",

    // Slack
    "slack.title": "Slack",
    "slack.actions.react": "反应",
    "slack.actions.reactions": "反应列表",
    "slack.actions.sendMessage": "发送",
    "slack.actions.editMessage": "编辑",
    "slack.actions.deleteMessage": "删除",
    "slack.actions.readMessages": "读取消息",
    "slack.actions.pinMessage": "置顶",
    "slack.actions.unpinMessage": "取消置顶",
    "slack.actions.listPins": "置顶列表",
    "slack.actions.memberInfo": "成员",
    "slack.actions.emojiList": "表情列表",
  },
};

/**
 * Get translated label for a tool or action
 * @param key Format: "toolName.title" or "toolName.actions.actionName"
 * @param locale Language code (e.g., "zh-CN", "en")
 * @returns Translated string or undefined if not found
 */
export function getToolLabel(key: string, locale: string): string | undefined {
  return translations[locale]?.[key];
}
