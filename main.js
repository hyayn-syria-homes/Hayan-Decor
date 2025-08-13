// main.js
document.addEventListener("DOMContentLoaded", function () {
  const inputText = document.getElementById("inputText");
  const resultsContainer = document.getElementById("resultsContainer");
  const filterButtons = document.querySelectorAll(".filter-btn");

  const decorStyles = [
    {
      id: "arabic",
      name: "زخارف عربية",
      icon: "fas fa-moon",
      category: "arabic",
    },
    {
      id: "arabic1",
      name: "زخارف عربية",
      icon: "fas fa-moon",
      category: "arabic1",
    },
    {
      id: "arabic2",
      name: "زخارف عربية",
      icon: "fas fa-moon",
      category: "arabic2",
    },
    {
      id: "arabic3",
      name: "زخارف عربية",
      icon: "fas fa-moon",
      category: "arabic3",
    },
    {
      id: "arabic4",
      name: "زخارف عربية",
      icon: "fas fa-moon",
      category: "arabic4",
    },
    {
      id: "arabic5",
      name: "زخارف عربية",
      icon: "fas fa-moon",
      category: "arabic5",
    },
    {
      id: "arabic6",
      name: "زخارف عربية",
      icon: "fas fa-moon",
      category: "arabic6",
    },
    {
      id: "arabic7",
      name: "زخارف عربية",
      icon: "fas fa-moon",
      category: "arabic7",
    },
    {
      id: "arabic8",
      name: "زخارف عربية",
      icon: "fas fa-moon",
      category: "arabic8",
    },
    {
      id: "arabic9",
      name: "زخارف عربية",
      icon: "fas fa-moon",
      category: "arabic9",
    },
    {
      id: "arabic10",
      name: "زخارف عربية",
      icon: "fas fa-moon",
      category: "arabic10",
    },
    {
      id: "arabic11",
      name: "زخارف عربية",
      icon: "fas fa-moon",
      category: "arabic11",
    },
    {
      id: "arabic12",
      name: "زخارف عربية",
      icon: "fas fa-moon",
      category: "arabic12",
    },
    {
      id: "english",
      name: "زخارف إنجليزية",
      icon: "fas fa-globe",
      category: "english",
    },
    {
      id: "english1",
      name: "زخارف إنجليزية",
      icon: "fas fa-globe",
      category: "english1",
    },
    {
      id: "english2",
      name: "زخارف إنجليزية",
      icon: "fas fa-globe",
      category: "english2",
    },
    {
      id: "english3",
      name: "زخارف إنجليزية",
      icon: "fas fa-globe",
      category: "english3",
    },
    {
      id: "english4",
      name: "زخارف إنجليزية",
      icon: "fas fa-globe",
      category: "english4",
    },
    {
      id: "english5",
      name: "زخارف إنجليزية",
      icon: "fas fa-globe",
      category: "english5",
    },
    {
      id: "english6",
      name: "زخارف إنجليزية",
      icon: "fas fa-globe",
      category: "english6",
    },
    {
      id: "english7",
      name: "زخارف إنجليزية",
      icon: "fas fa-globe",
      category: "english7",
    },
    {
      id: "english8",
      name: "زخارف إنجليزية",
      icon: "fas fa-globe",
      category: "english8",
    },
    {
      id: "english9",
      name: "زخارف إنجليزية",
      icon: "fas fa-globe",
      category: "english9",
    },
    {
      id: "english10",
      name: "زخارف إنجليزية",
      icon: "fas fa-globe",
      category: "english10",
    },
    {
      id: "english11",
      name: "زخارف إنجليزية",
      icon: "fas fa-globe",
      category: "english11",
    },
    {
      id: "english12",
      name: "زخارف إنجليزية",
      icon: "fas fa-globe",
      category: "english12",
    },
    {
      id: "english13",
      name: "زخارف إنجليزية",
      icon: "fas fa-globe",
      category: "english13",
    },
    {
      id: "english14",
      name: "زخارف إنجليزية",
      icon: "fas fa-globe",
      category: "english14",
    },
    {
      id: "english15",
      name: "زخارف إنجليزية",
      icon: "fas fa-globe",
      category: "english15",
    },
    {
      id: "english16",
      name: "زخارف إنجليزية",
      icon: "fas fa-globe",
      category: "english16",
    },
    {
      id: "english17",
      name: "زخارف إنجليزية",
      icon: "fas fa-globe",
      category: "english17",
    },
    {
      id: "english18",
      name: "زخارف إنجليزية",
      icon: "fas fa-globe",
      category: "english18",
    },
    {
      id: "english19",
      name: "زخارف إنجليزية",
      icon: "fas fa-globe",
      category: "english19",
    },
    {
      id: "english20",
      name: "زخارف إنجليزية",
      icon: "fas fa-globe",
      category: "english20",
    },
    {
      id: "english21",
      name: "زخارف إنجليزية",
      icon: "fas fa-globe",
      category: "english21",
    },
    {
      id: "special",
      name: "زخارف خاصة",
      icon: "fas fa-star",
      category: "special",
    },
    {
      id: "combined",
      name: "زخارف مختلطة",
      icon: "fas fa-blend",
      category: "all",
    },
  ];

  decorStyles.forEach((style) => {
    const box = document.createElement("div");
    box.className = "result-box";
    box.dataset.category = style.category;
    box.innerHTML = `
            <div class="result-title">
                <i class="${style.icon}"></i> ${style.name}
            </div>
            <div class="preview-box" id="preview-${style.id}">النص المزخرف سيظهر هنا...</div>
            <div class="decorator-info">${getDecoratorInfo(style.category)}</div>
            <button class="copy-btn" data-target="preview-${style.id}">
                <i class="fas fa-copy me-2"></i>نسخ النص
            </button>
        `;
    resultsContainer.appendChild(box);
  });

  inputText.addEventListener("input", function () {
    const text = inputText.value;
    document.querySelectorAll(".result-box").forEach((decor) => {
      const preview = decor.querySelector(".preview-box");
      preview.innerText = text
        ? applyDecoration(text, decor.dataset.category)
        : "النص المزخرف سيظهر هنا...";
    });
  });

  // نسخ النص المزخرف
  document.addEventListener("click", function (e) {
    if (e.target.closest(".copy-btn")) {
      const btn = e.target.closest(".copy-btn");
      const targetId = btn.getAttribute("data-target");
      const preview = document.getElementById(targetId);
      const text = preview.innerText;

      navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check me-2"></i> تم النسخ!';
        btn.classList.add("copied");

        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove("copied");
        }, 2000);
      });
    }
  });

  // filter
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      document.querySelectorAll(".result-box").forEach((decor) => {
        const cat = decor.dataset.category;

        let show = false;

        if (filter === "all") {
          show = true;
        } else if (filter === "arabic") {
          // أي فئة عربية تدخل هنا
          show =
            cat === "arabic" ||
            cat === "arabic1" ||
            cat === "arabic2" ||
            cat === "arabic3" ||
            cat === "arabic4" ||
            cat === "arabic5" ||
            cat === "arabic6" ||
            cat === "arabic7" ||
            cat === "arabic8" ||
            cat === "arabic9" ||
            cat === "arabic10" ||
            cat === "arabic11" ||
            cat === "arabic12";
        } else if (filter === "english") {
          show =
            cat === "english" ||
            cat === "english1" ||
            cat === "english2" ||
            cat === "english3" ||
            cat === "english4" ||
            cat === "english5" ||
            cat === "english6" ||
            cat === "english7" ||
            cat === "english8" ||
            cat === "english9" ||
            cat === "english10" ||
            cat === "english11" ||
            cat === "english12" ||
            cat === "english13" ||
            cat === "english14" ||
            cat === "english15" ||
            cat === "english16" ||
            cat === "english17" ||
            cat === "english18" ||
            cat === "english19" ||
            cat === "english20" ||
            cat === "english21";
        } else {
          show = cat === filter;
        }

        decor.style.display = show ? "block" : "none";
      });
    });
  });
});
