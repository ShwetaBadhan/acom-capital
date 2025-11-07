<template>
  <div>
    <div class="modal-overlay" id="modalOverlay">
      <div class="modal-container">
        <div class="modal-image">
          <button class="close-btn" onclick="closeModal()">&times;</button>
          <div class="image-content">
            <img src="/images/about-image.jpg" alt="" />
          </div>
        </div>

        <div class="modal-form">
          <h3 class="form-title mb-2">Submit your Contact info</h3>
          <hr />
          <form id="contactForm" onsubmit="handleSubmit(event)">
            <div class="input-group mb-2">
              <span class="input-group-text"
                ><i class="bi bi-person"></i
              ></span>
              <input
                type="text"
                class="form-control"
                placeholder="First Name"
              />
            </div>
            <div class="input-group mb-2">
              <span class="input-group-text"
                ><i class="bi bi-person"></i
              ></span>
              <input
                type="text"
                class="form-control"
                placeholder="Last Name"
              />
            </div>
            <div class="input-group mb-2">
              <span class="input-group-text"
                ><i class="bi bi-telephone"></i
              ></span>
              <input
                type="text"
                class="form-control"
                placeholder="Phone"
              />
            </div>
            <div class="input-group mb-2">
              <span class="input-group-text"
                ><i class="bi bi-envelope"></i
              ></span>
              <input
                type="text"
                class="form-control"
                placeholder="Email"
              />
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
              <a href="#" onclick="event.preventDefault()">Privacy Policy</a> |
              <a href="#" onclick="event.preventDefault()">Terms of Service</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>




