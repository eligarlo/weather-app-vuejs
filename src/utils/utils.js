class Utils {
    // Format 'Day DD Month YYYY'
    dateBuilder() {
        let now = new Date();
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[now.getDay()];
        let date = now.getDate();
        let month = months[now.getMonth()];
        let year = now.getFullYear();

        return `${day} ${date} ${month} ${year}`;
    }
}

export default new Utils();