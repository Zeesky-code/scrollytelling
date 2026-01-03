// Estimated average hours per day (must sum to 24 ideally)
// Categories: Sleep, PaidWork, UnpaidWork, PersonalCare, Leisure, Commute, ScreenTime
// Note: "ScreenTime" overlaps often, but here we treat it as a dedicated bucket eating into others for visualization.

export const clockData = {
    global: {
        data: [
            { label: "Sleep", value: 8.5, color: "#34495E" },
            { label: "Paid Work", value: 5.0, color: "#D35400" },
            { label: "Unpaid Work", value: 3.5, color: "#FAB1A0" },
            { label: "Personal Care", value: 2.0, color: "#3498db" },
            { label: "Leisure", value: 4.5, color: "#78E08F" },
            { label: "Commute", value: 0.5, color: "#E74c3c" }
        ],
        highlight: null // Show all
    },
    usa: {
        data: [
            { label: "Sleep", value: 8.0, color: "#34495E" },
            { label: "Paid Work", value: 6.0, color: "#D35400" },
            { label: "Unpaid Work", value: 3.0, color: "#FAB1A0" },
            { label: "Personal Care", value: 1.5, color: "#3498db" },
            { label: "Leisure", value: 4.0, color: "#78E08F" },
            { label: "Screen/Commute", value: 1.5, color: "#9B59B6" }
        ],
        highlight: "Paid Work"
    },
    japan: {
        data: [
            { label: "Sleep", value: 7.2, color: "#34495E" },
            { label: "Paid Work", value: 8.5, color: "#D35400" },
            { label: "Unpaid Work", value: 1.5, color: "#FAB1A0" },
            { label: "Personal Care", value: 1.5, color: "#3498db" },
            { label: "Leisure", value: 3.3, color: "#78E08F" },
            { label: "Commute", value: 2.0, color: "#E74c3c" }
        ],
        highlight: "Paid Work"
    },
    nigeria: {
        data: [
            { label: "Sleep", value: 6.5, color: "#34495E" },
            { label: "Work", value: 9.0, color: "#D35400" },
            { label: "Commute (Traffic)", value: 4.0, color: "#E74c3c" },
            { label: "Personal/Leisure", value: 4.5, color: "#78E08F" }
        ],
        highlight: "Commute (Traffic)"
    },
    france: {
        data: [
            { label: "Sleep", value: 8.7, color: "#34495E" },
            { label: "Paid Work", value: 4.5, color: "#D35400" },
            { label: "Eating/Personal", value: 3.5, color: "#3498db" },
            { label: "Leisure", value: 5.5, color: "#78E08F" },
            { label: "Other", value: 1.8, color: "#95a5a6" }
        ],
        highlight: "Eating/Personal"
    },
    digital: {
        data: [
            { label: "Sleep", value: 7.8, color: "#34495E" },
            { label: "Work", value: 6.0, color: "#D35400" },
            { label: "Screen Leisure", value: 6.5, color: "#9B59B6" },
            { label: "Offline Leisure", value: 1.5, color: "#78E08F" },
            { label: "Other", value: 2.2, color: "#FAB1A0" }
        ],
        highlight: "Screen Leisure"
    },
    men: {
        data: [
            { label: "Sleep", value: 8.0, color: "#34495E" },
            { label: "Paid Work", value: 6.5, color: "#D35400" },
            { label: "Unpaid Care", value: 1.5, color: "#FAB1A0" },
            { label: "Leisure", value: 5.5, color: "#78E08F" },
            { label: "Other", value: 2.5, color: "#A29BFE" }
        ],
        highlight: "Paid Work" // Changed from Unpaid Care to match "Mostly Work" text? The text says "Mostly Work and Leisure". Highlighting Work seems appropriate or Leisure. Let's stick to Work as it's the contrast to women's care.
    },
    women: {
        data: [
            { label: "Sleep", value: 8.2, color: "#34495E" },
            { label: "Paid Work", value: 4.5, color: "#D35400" },
            { label: "Unpaid Care", value: 4.5, color: "#E17055" },
            { label: "Leisure", value: 4.0, color: "#78E08F" },
            { label: "Other", value: 2.8, color: "#A29BFE" }
        ],
        highlight: "Unpaid Care"
    },
    social_1970: {
        data: [
            { label: "Sleep", value: 8.0, color: "#34495E" },
            { label: "Work", value: 5.0, color: "#D35400" },
            { label: "With Friends", value: 2.5, color: "#FD79A8" },
            { label: "Alone", value: 3.0, color: "#B2BEC3" },
            { label: "Family/Other", value: 5.5, color: "#78E08F" }
        ],
        highlight: "With Friends"
    },
    social_2024: {
        data: [
            { label: "Sleep", value: 8.0, color: "#34495E" },
            { label: "Work", value: 5.5, color: "#D35400" },
            { label: "With Friends", value: 0.5, color: "#FD79A8" },
            { label: "Alone", value: 6.5, color: "#636E72" },
            { label: "Family/Other", value: 3.5, color: "#78E08F" }
        ],
        highlight: "Alone"
    }
};
