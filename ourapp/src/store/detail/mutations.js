export default{
    play(state){
        state.show = true
    },
    addImgList(state,list,carList){
        state.imgList = list,
        state.carList = carList
    },
    changeCurrentIndex(state,index){
        console.log('genghuan',index)
        state.currentIndex = index
    }
}