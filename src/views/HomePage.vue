<template>
  <section>
       <div class="bg-[url('https://img.freepik.com/premium-photo/low-key-filter-law-bookshelf-with-wooden-judge-s-gavel-golden-scale_34259-438.jpg?w=2000')] bg-cover w-screen h-screen bg-fixed">
    <div style="background-color: rgba(11, 132, 202, 0.336) ;" class="h-screen w-screen" >
        <div style="font-size: 24pt; font-weight: bold;" class="justify-center items-center text-center flex pt-5">
            <h1 class="text-white">LAYANAN LAPORAN HUKUM MASYARAKAT</h1>
        </div>
        <div class="justify-center items-center text-center flex">
            <div class="grid grid-cols-3 gap-4 pt-5">
                <div class="w-full mb-10 max-w-sm bg-white rounded-lg shadow-md dark:bg-slate-500 opacity-90 dark:border-gray-700">
                    <div class="justify-center items-center flex">
                        <img class="p-8 rounded-t-lg w-60" src="https://pn-gedongtataan.go.id/wp-content/themes/mahkamahagung/images/logo.png">
                    </div>
                    <div class="px-5 pb-5">
                            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white" style="font-size:20pt;">PENGADILAN NEGERI</h5>
                            <h5 class=" tracking-tight text-gray-900 dark:text-white" style="font-size:12pt;">Interaksi langsung 24 jam dengan pengadilan negeri terdekat di wilayah anda</h5>
                        <span class="text-white"></span>
                        <p class="text-white"></p>
                        <div class="flex justify-between items-center pt-5">
                            <span class="text-3xl font-bold text-gray-900 dark:text-white"></span>
                        </div >
                    </div>
                    </div>
                    <div class="w-full mb-10 max-w-sm bg-white rounded-lg shadow-md dark:bg-slate-500 opacity-90 dark:border-gray-700">
                        <div class="justify-center items-center flex">
                            <img class="p-8 rounded-t-lg w-60" src="https://freepikpsd.com/file/2019/10/logo-petir-png-1-Transparent-Images.png">
                        </div>
                        <div class="px-5 pb-5">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white" style="font-size:20pt;">RESPONSIF</h5>
                                <h5 class=" tracking-tight text-gray-900 dark:text-white" style="font-size:12pt;">Menerima Laporan dengan cepat dan merespon segala kebutuhan anda lebih cepat dari kilat</h5>
                           
                        </div>
                        </div>
                        <div class="w-full mb-10 max-w-sm bg-white rounded-lg shadow-md dark:bg-slate-500 opacity-90 dark:border-gray-700">
                            <div class="justify-center items-center flex">
                                <img class="p-8 rounded-t-lg w-60" src="https://cdn.quotesgram.com/img/1/68/1364267677-Simple.jpg">
                            </div>
                            <div class="px-5 pb-5">
                                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white" style="font-size:20pt;">SIMPLE</h5>
                                    <h5 class=" tracking-tight text-gray-900 dark:text-white" style="font-size:12pt;">Mempersingkat segala laporan menjadi cepat dan singkat, serta proses yang membuat anda tidak diribetkan dengan alur proses yang simple</h5>
            
                            </div>
                            </div>
            </div>
           
        </div>
        <div style="font-size: 24pt; font-weight: bold;" class="justify-center items-center text-center flex">
            <h1 v-if="!token" class="text-white">YUK MULAI BUAT LAPORAN, <button class="text-blue-300" @click.prevent="clickRegister">REGISTER</button></h1>
              <h1 v-else-if="token" class="text-white">YUK MULAI BUAT LAPORAN, <button class="text-blue-300" @click.prevent="addClick">ADD</button></h1>
        </div>
    </div>
</div>
   </section>
</template>
<script>
export default{
    data(){
        return{
            token: localStorage.getItem("access_token")
        }
    },
    methods:{
        clickRegister(){
            this.$router.push('/register')
        },
        addClick(){
            this.$router.push('/reports/add')
        }
    }
}
</script>
