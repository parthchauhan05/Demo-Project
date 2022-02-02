import Vue from "vue"

const ElementTableCtx = Symbol('__ElementTableHeaderCtx')

function setFixed(el, fixed, height) {
  if (fixed) {
    el.style.transform = `translateY(${height}px)`
    el.style.zIndex = 100
  } else {
    el.style.transform = `translateY(0)`
    el.style.zIndex = 'inherit'
  }
}
function setFixedHeaderFixed(el, fixed, height) {
  if (fixed) {
    el.style.transform = `translateY(${height}px)`
    el.style.zIndex = 100
  } else {
    el.style.transform = `translateY(0)`
    el.style.zIndex = 'inherit'
  }
}

export const freezeHeader = {
    inserted(el) {
      let startPos = 100, container = window 
      const headerWrapper = el.querySelector('.el-table__header-wrapper')
    
      console.log(screen.width)

      headerWrapper.style.position = 'relative'
      const onScroll = () => {
        const pos = el.getBoundingClientRect()

        if (pos.top < 0) {
          setFixed(headerWrapper, true, Math.abs(pos.top))
        } else {
          setFixed(headerWrapper, false)
        }
      }

      container.addEventListener('scroll', onScroll)

      el[ElementTableCtx] = {
        startPos,
        onScroll,
        container,
        fixedScroll: null
      }
    },
    componentUpdated(el) {
      let { fixedScroll, startPos, container } = el[ElementTableCtx]

      if (fixedScroll) {
        container.removeEventListener('scroll', fixedScroll)
      }

      setTimeout(() => {
        const fixedHeaderWrapper = el.querySelector('.el-table__fixed > .el-table__fixed-header-wrapper')
        const fixedRightHeaderWrapper = el.querySelector('.el-table__fixed-right > .el-table__fixed-header-wrapper') // eslint-disable-line max-len

        if (fixedHeaderWrapper || fixedRightHeaderWrapper) {
          el.querySelector('.el-table__fixed') && (el.querySelector('.el-table__fixed').style.zIndex = 100)
          el.querySelector('.el-table__fixed-right') && (el.querySelector('.el-table__fixed-right').style.zIndex = 101)

          fixedScroll = () => {
            const pos = el.getBoundingClientRect()

            if (pos.top - startPos < 0) {
              fixedHeaderWrapper && setFixedHeaderFixed(fixedHeaderWrapper, true, Math.abs(pos.top - startPos))
              fixedRightHeaderWrapper && setFixedHeaderFixed(fixedRightHeaderWrapper, true, Math.abs(pos.top - startPos))
            } else {
              fixedHeaderWrapper && setFixedHeaderFixed(fixedHeaderWrapper, false)
              fixedRightHeaderWrapper && setFixedHeaderFixed(fixedRightHeaderWrapper, false)
            }
          }

          container.addEventListener('scroll', fixedScroll)
          el[ElementTableCtx].fixedScroll = fixedScroll
        }
      }, 0)
    },
    unbind(el) {
      const { fixedScroll, onScroll, container } = el[ElementTableCtx]
      container.removeEventListener('scroll', onScroll)
      container.removeEventListener('scroll', fixedScroll)
      el[ElementTableCtx].onScroll = null
      el[ElementTableCtx].fixedScroll = null
      el[ElementTableCtx] = null
    }
  }

Vue.directive('freeze-header', freezeHeader)