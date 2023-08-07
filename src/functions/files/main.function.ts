import chalk from "chalk"

const themeColors = {
    text: "#0EB5EA",
    variable: "#9ACD32",
    error: "#f5426c"
}

type colorType = "text" | "variable" | "error"

export const color = (color: colorType, message: any) => {
    return chalk.hex(themeColors[color])(message)
}