
function goToFirstPage() {
    if(this.$refs.paginator) {
        this.$refs.paginator.goToPage(1)
    }    
}    
        
export default ({
    goToFirstPage
})