<template>
  <div>
    <div class="modal fade" id="masterclassModal" tabindex="-1" aria-labelledby="masterclassModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered ">

        <div class="modal-content">
        

        <div class="modal-form">
  


         <div class="d-flex justify-content-between align-items-center mb-2">
  <h3 class="form-title mb-0">Submit your Contact info</h3>

  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="modal"
    aria-label="Close"
  ></button>
</div>

          <hr />
          <form id="contactForm" onsubmit="handleSubmit(event)">
            <div class="input-group mb-2">
              <span class="input-group-text"><i class="bi bi-person"></i></span>
              <input
                type="text"
                class="form-control"
                placeholder="First Name"
              />
            </div>
            <div class="input-group mb-2">
              <span class="input-group-text"><i class="bi bi-person"></i></span>
              <input type="text" class="form-control" placeholder="Last Name" />
            </div>
            <div class="input-group mb-2">
              <span class="input-group-text"
                ><i class="bi bi-telephone"></i
              ></span>
              <input type="text" class="form-control" placeholder="Phone" />
            </div>
            <div class="input-group mb-2">
              <span class="input-group-text"
                ><i class="bi bi-envelope"></i
              ></span>
              <input type="text" class="form-control" placeholder="Email" />
            </div>

            <div class="checkbox-group">
              <input type="checkbox" id="terms" name="terms" required />
              <label for="terms" class="checkbox-label">
                I agree to the terms & conditions provided by the company. By
                providing my email & phone number, I agree to receive text
                messages & emails from the company.
              </label>
            </div>

            <button type="submit" class="submit-btn">Submit</button>

            <div class="footer-links text-center mt-2">
              <a href="/privacy-policy">Privacy Policy</a> |
              <a href="/terms-conditions">Terms of Service</a>
            </div>
          </form>
        </div>
      </div>
        </div>
     
    </div>
  </div>
</template>

<!-- <script setup>
function closeModal() {
  const overlay = document.getElementById("masterclassModal");
  overlay.style.animation = "fadeOut 0.3s forwards";
  setTimeout(() => {
    overlay.style.display = "none";
  }, 300);
}
</script> -->
