import router from "@/router"

export function useHelper(){
    function toSection(name:string){
        router.push(`${name}`)
    }

    return {
        toSection
    }
}