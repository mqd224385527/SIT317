// 初始化本地存储数据
if (!localStorage.getItem('schedules')) {
    localStorage.setItem('schedules', JSON.stringify([]));
}
if (!localStorage.getItem('messages')) {
    localStorage.setItem('messages', JSON.stringify([]));
}

// 日程相关功能
const ScheduleManager = {
    addSchedule: function(schedule) {
        const schedules = JSON.parse(localStorage.getItem('schedules') || '[]');
        schedules.push({
            ...schedule,
            id: Date.now(),
            createdAt: new Date().toISOString()
        });
        localStorage.setItem('schedules', JSON.stringify(schedules));
    },

    getSchedules: function() {
        return JSON.parse(localStorage.getItem('schedules') || '[]');
    },

    deleteSchedule: function(scheduleId) {
        let schedules = JSON.parse(localStorage.getItem('schedules') || '[]');
        schedules = schedules.filter(s => s.id !== scheduleId);
        localStorage.setItem('schedules', JSON.stringify(schedules));
    }
};

// 聊天相关功能
const ChatManager = {
    addMessage: function(message) {
        const messages = JSON.parse(localStorage.getItem('messages') || '[]');
        messages.push({
            ...message,
            id: Date.now(),
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('messages', JSON.stringify(messages));
    },

    getMessages: function() {
        return JSON.parse(localStorage.getItem('messages') || '[]');
    },

    formatTime: function(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
};

// 工具函数
function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
} 