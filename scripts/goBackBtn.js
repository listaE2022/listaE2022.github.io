
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

var rootElement = document.documentElement

function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
}
  
scrollToTopBtn.addEventListener("click", scrollToTop)

function handleScroll() {
    // Do something on scroll
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
    if ((rootElement.scrollTop / scrollTotal ) > 0.30 ) {
      // Show button
      scrollToTopBtn.classList.add("showBtn")
    } else {
      // Hide button
      scrollToTopBtn.classList.remove("showBtn")
    }
  }
  
document.addEventListener("scroll", handleScroll)