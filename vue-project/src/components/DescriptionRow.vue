<template>


    <tbody >
        
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <p class="text-xl text-white uppercase inline-block align-start text-left pl-2 font-bold">Paquito</p>
            </th>
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