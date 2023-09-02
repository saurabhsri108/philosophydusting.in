const hamburgerBtn = document.querySelector("#hamburger");
const mobileNavigation = document.querySelector("#mobileNavigation");
const navList = document.querySelector("#navList");

const customClassListForNavList =
  "absolute bottom-0 left-0 right-0 top-0 flex items-start justify-center gap-8 bg-dark";
const customClassListForHamburger = "relative -right-8 top-8 order-2";
const customClassListForMobileNavigation =
  "relative -right-8 flex h-full flex-col items-center justify-center gap-4";

hamburgerBtn?.addEventListener("click", (e: Event) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  spreadTailwindClasses(customClassListForNavList, navList);
  spreadTailwindClasses(customClassListForHamburger, hamburgerBtn);
  mobileNavigation?.classList.toggle("hidden");
  spreadTailwindClasses(customClassListForMobileNavigation, mobileNavigation);
});

function spreadTailwindClasses(classes: string, element: Element | null) {
  classes?.split(" ")?.forEach((className) => {
    element?.classList.toggle(className);
  });
}
