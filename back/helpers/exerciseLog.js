export const reBuildTimes = (log, prevExlog = null) => {
    return log.times.map ((item,index) => ({
        ...item,
        prevWeight: prevExlog ? prevExlog.times[index].weigth: 0,
        prevRepeat: prevExlog ? prevExlog.times[index].repeat: 0,
    }))
}