export default class GeoWidget {
    constructor(location) {
      this.location = location;
      this.date = new Date();
    }
    getDate() {
        const date = this.date;
        let currentMonth = date.getMonth() + 1;
        currentMonth < 10 ? currentMonth = '0' + currentMonth : currentMonth; // month format 00
        const fullDate = `${date.getUTCDate()}/${currentMonth}/${date.getUTCFullYear()}`;
        return fullDate;
    }
    getTime() {
        let hours = this.date.getHours();
        let minutes = this.date.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        const computedTime = hours + ':' + minutes + ' ' + ampm;
        return computedTime;
    }
    getData() {
        const widgetObj = {}
        widgetObj.place = this.location;
        widgetObj.time = this.getTime();
        widgetObj.date = this.getDate();
        return widgetObj;
    }
}