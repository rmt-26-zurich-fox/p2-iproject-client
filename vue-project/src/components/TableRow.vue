<template>


    <tbody >
        
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <p class="text-xl text-white uppercase inline-block align-start text-left pl-2 font-bold">Paquito</p>
            </th>
            <td class="py-4 px-6">
                Sliver
            </td>
            <td class="py-4 px-6">
                Laptop
            </td>
            <td class="py-4 px-6">
                $2999
            </td>
            <td class="py-4 px-6">
                Horror
            </td>
            <td class="py-4 px-6">
                <button class="border-4 px-2 py-2 bg-red-600 text-white"> Delete</button>
            </td>
        </tr>
    
    </tbody>
   
</template>

<script>
import { mapActions, mapState} from 'pinia'
import { dataStore } from "../stores/dataStore"
import { authorizationStore} from "../stores/authorizationStore"

export default {
    props: ["movie"],
}
</script>