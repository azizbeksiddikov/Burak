console.log("Products frontend javascript file");

$(function () {
  $(".product-collection").on("change", () => {
    const selectedValue = $(".product-collection").val();

    if (selectedValue === "DRINK") {
      $("#product-volume").show();
      $("#product-collection").hide();
    } else {
      $("#product-collection").show();
      $("#product-volume").hide();
    }
  });

  $(
    $("#process-btn").on("click", () => {
      $(".dish-container").slideToggle(500);
      $("#process-btn").css("display", "none");
    })
  );

  $(
    $("#cancel-btn").on("click", () => {
      $(".dish-container").slideToggle(100);
      //   $("#process-btn").show();
      $("#process-btn").css("display", "flex");
    })
  );
});

function validateForm() {
  console.log("Validating form");
  const productName = $(".product-name").val();
  const productStatus = $(".product-status").val();
  const productPrice = $(".product-price").val();
  const productLeftCount = $(".product-left-count").val();
  const productCollection = $(".product-collection").val();
  const productDesc = $(".product-desc").val();

  if (
    productName === "" ||
    productStatus === "" ||
    productPrice === "" ||
    productLeftCount === "" ||
    productCollection === "" ||
    productDesc === ""
  ) {
    alert("Please fill all the required fields");
    return false;
  }
  return true;
}

function previewFileHandler(input, order) {
  const imgClassName = input.className;
  //   console.log("input:", input);
  //   console.log("imgClassName", imgClassName);

  const file = $(`.${imgClassName}`).get(0).files[0];
  //   console.log("file:", file);

  const fileType = file["type"];
  const validImageType = ["image/jpg", "image/jpeg", "image/png"];

  if (!validImageType.includes(fileType)) {
    alert("Please insert only jpeg, jpg and png!");
    return;
  } else {
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        $(`#image-section-${order}`).attr("src", reader.result).addClass(order);
      };
      reader.readAsDataURL(file);
    }
  }
}
