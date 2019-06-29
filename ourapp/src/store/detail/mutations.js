export default{
    play(state){
        state.show = true
    },
    addImgList(state,list){
        state.imgList = list
    },
    changeCurrentIndex(state,index){
        console.log('genghuan',index)
        state.currentIndex = index
    }
}