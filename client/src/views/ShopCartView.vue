<script>

</script>

<template>

<div class="overflow-x-auto relative">
    <table class="w-full text-sm text-left text-gray-600  mt-5">
        <thead class="text-xs text-gray-800 uppercase bg-[#ACB999]  ">
            <tr>
                <th scope="col" class="py-3 px-5 rounded-tl-lg">
                    Product name
                </th>
                    <th scope="col" class="py-3 px-5 ">
                       
                   </th>
                <th scope="col" class="py-3 px-5">
                    Qty
                </th>
                <th scope="col" class="py-3 px-5 rounded-tr-lg">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-[#E9E5D6] ">
                <th scope="row" class="py-4 px-5 font-medium text-gray-600 whitespace-nowrap ">
                    Apple MacBook Pro 17"
                </th>
                <td lass="py-4 px-5 ">
                    <button class="text-xl" >
                        <ion-icon name="trash-outline"></ion-icon>
                    </button>
                </td>
                
                <td class="py-4 px-5">
                    1
                </td>
                <td class="py-4 px-5">
                    $99
                </td>
            </tr>
            <tr class="bg-[#E9E5D6] ">
                <th scope="row" class="py-4 px-5 font-medium text-gray-600 whitespace-nowrap ">
                    Microsoft Surface Pro
                </th>
                 <td lass="py-4 px-5 ">
                    <button class="text-xl" >
                        <ion-icon name="trash-outline"></ion-icon>
                    </button>
                </td>
                        <td class="py-4 px-5">
                           1
                        </td>
                <td class="py-4 px-5">
                    $99
                </td>
            </tr>
            <tr class="bg-[#E9E5D6] ">
                <th scope="row" class="py-4 px-5 font-medium text-gray-600 whitespace-nowrap ">
                    Magic Mouse 2
                </th>
                <td lass="py-4 px-5 ">
                    <button class="text-xl" >
                        <ion-icon name="trash-outline"></ion-icon>
                    </button>
                </td>
                        <td class="py-4 px-5">
                           1
                        </td>
                <td class="py-4 px-5">
                    $99
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr class="font-semibold text-gray-600 dark:text-white bg-[#ACB999]">
                <th scope="row" class="py-3 px-5 text-base">Total</th>
                <td class="py-3 px-5"></td>
                <td class="py-3 px-5">3</td>
                <td class="py-3 px-5">21,000</td>
            </tr>
        </tfoot>
    </table>
    <div class="w-full flex">
        <button class="bg-[#ACB999] rounded-lg p-4 mt-5 mx-auto ">Check Out</button>

    </div>
</div>

</template>