<script>
export default {
    props: ['history'],
    computed: {
        formatDate() {
            const formatedDate = new Date(this.history.createdAt)

            const day = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];

            const dateMonthYear = `${formatedDate.getDate()}-${formatedDate.getMonth() + 1}-${formatedDate.getFullYear()}`;
            const time = `${formatedDate.getHours() < 10? "0" + formatedDate.getHours(): formatedDate.getHours()}:${formatedDate.getMinutes() < 10? "0" + formatedDate.getMinutes(): formatedDate.getMinutes()}`;
            return `${day[formatedDate.getDay()]}, ${dateMonthYear} Pukul ${time}`;
        }
    }
}
</script>

<template>
<tbody>
              <tr>
                <td>{{history.name}}</td>
                <td>{{history.description}}</td>
                <td>{{history.updatedBy}}</td>
                <td>{{formatDate}}</td>
              </tr>
            </tbody>
</template>