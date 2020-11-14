import { ref, onMounted, onUnmounted } from 'vue'
import axios from 'axios'


  
function userURLLoader<T>(url: string) {
    const result = ref<T | null>(null);
    const loading = ref(true);
    const loaded = ref(false);
    const error = ref(null);
    axios.get(url).then((rawDate) => {
        loading.value = false;
        loaded.value = true;
        result.value = rawDate.data;
    }).catch(e => {
        error.value = e;
        loading.value = false;
    })

    return {
        result,
        loading,
        error,
        loaded
    }
}


function userMousePositon() {
    const x = ref(0);
    const y = ref(0);
    const updateMouse = (e: MouseEvent) => {
        x.value = e.pageX;
        y.value = e.pageY;
    }
    onMounted(() => {
        document.addEventListener('click', updateMouse);
    })
    onUnmounted(() => {
        document.removeEventListener('click', updateMouse);
    })
    return { x, y }
}


export default { userMousePositon, userURLLoader };