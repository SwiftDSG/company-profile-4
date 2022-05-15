<template>
  <div class="rd-layout" ref="rdLayout">
    <div class="rd-mouse">
      <div class="rd-mouse-scroll"></div>
    </div>
    <div class="rd-navigation-bar" ref="rdNav">
      <div ref="rdNavBtn" class="rd-navigation-button">
        <div class="rd-navigation-button-bar"></div>
        <div class="rd-navigation-button-bar"></div>
      </div>
      <div class="rd-logo-container">
        <svg
          class="rd-logo"
          viewBox="0 0 1587 373"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M683.37 372.74C786.299 372.74 869.74 289.299 869.74 186.37C869.74 83.4407 786.299 0 683.37 0C580.441 0 497 83.4407 497 186.37C497 289.299 580.441 372.74 683.37 372.74ZM682.851 280.334C734.459 280.334 776.295 238.497 776.295 186.889C776.295 135.281 734.459 93.4446 682.851 93.4446C631.243 93.4446 589.406 135.281 589.406 186.889C589.406 238.497 631.243 280.334 682.851 280.334Z"
          />
          <circle cx="683.37" cy="186.37" r="79.4279" />
          <path d="M0 365.4V7H101.376V365.4H0Z" />
          <path
            d="M1007.18 145.752H1173.58V221.528H1007.18V145.752ZM1014.35 287.064H1201.74V365.4H914V7H1195.09V85.336H1014.35V287.064Z"
          />
          <path
            d="M1246 365.4V7H1329.46L1527.09 245.592H1487.66V7H1586.99V365.4H1503.54L1305.9 126.808H1345.33V365.4H1246Z"
          />
          <path
            d="M343.12 372.736C314.789 372.736 288.507 368.299 264.272 359.424C240.379 350.208 219.557 337.237 201.808 320.512C184.4 303.787 170.747 284.16 160.848 261.632C150.949 238.763 146 213.675 146 186.368C146 159.061 150.949 134.144 160.848 111.616C170.747 88.7467 184.4 68.9493 201.808 52.224C219.557 35.4987 240.379 22.6987 264.272 13.824C288.507 4.608 314.789 0 343.12 0C376.229 0 405.755 5.80267 431.696 17.408C457.979 29.0133 479.824 45.7387 497.232 67.584L432.72 125.952C421.115 112.299 408.315 101.888 394.32 94.72C380.667 87.552 365.307 83.968 348.24 83.968C333.563 83.968 320.08 86.3574 307.792 91.136C295.504 95.9147 284.923 102.912 276.048 112.128C267.515 121.003 260.688 131.755 255.568 144.384C250.789 157.013 248.4 171.008 248.4 186.368C248.4 201.728 250.789 215.723 255.568 228.352C260.688 240.981 267.515 251.904 276.048 261.12C284.923 269.995 295.504 276.821 307.792 281.6C320.08 286.379 333.563 288.768 348.24 288.768C365.307 288.768 380.667 285.184 394.32 278.016C408.315 270.848 421.115 260.437 432.72 246.784L497.232 305.152C479.824 326.656 457.979 343.381 431.696 355.328C405.755 366.933 376.229 372.736 343.12 372.736Z"
          />
        </svg>
      </div>
      <button class="rd-register-button">
        <span class="rd-register-button-title rd-caption-text">register</span>
      </button>
    </div>
    <div class="rd-body">
      <div class="rd-background">
        <svg
          class="rd-background-svg-1"
          viewBox="0 0 672 373"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M621.308 7H671.996V186.2H621.308V7ZM552.188 186.2H501.5V7H552.188V186.2ZM624.892 116.312H548.604V74.328H624.892V116.312Z"
          />
          <path
            d="M374.04 186.2V47.192H319V7H479.512V47.192H424.728V186.2H374.04Z"
          />
          <path
            d="M141.008 0C174.8 0 203.984 6.65601 228.56 19.968C253.477 33.28 272.763 53.0773 286.416 79.36C300.411 105.301 307.408 137.728 307.408 176.64C307.408 218.283 299.216 253.781 282.832 283.136C266.789 312.149 244.432 334.336 215.76 349.696C187.429 365.056 154.32 372.736 116.432 372.736C96.6346 372.736 77.52 370.347 59.088 365.568C40.656 361.131 24.784 354.816 11.472 346.624L48.336 273.92C58.576 281.088 69.1573 286.037 80.08 288.768C91.344 291.157 102.779 292.352 114.384 292.352C142.032 292.352 164.048 283.989 180.432 267.264C196.816 250.539 205.008 226.133 205.008 194.048C205.008 188.245 205.008 182.272 205.008 176.128C205.008 169.643 204.496 163.157 203.472 156.672L228.56 177.664C222.416 190.293 214.395 200.875 204.496 209.408C194.597 217.941 182.992 224.427 169.68 228.864C156.368 233.301 141.179 235.52 124.112 235.52C101.584 235.52 80.9333 230.912 62.16 221.696C43.728 212.139 28.88 198.997 17.616 182.272C6.35197 165.205 0.719971 145.237 0.719971 122.368C0.719971 97.4507 7.03464 75.9467 19.664 57.856C32.2933 39.424 49.1893 25.2587 70.352 15.36C91.5146 5.12001 115.067 0 141.008 0ZM147.664 72.192C138.107 72.192 129.744 74.0693 122.576 77.824C115.408 81.5787 109.605 86.8694 105.168 93.696C101.072 100.181 99.024 108.203 99.024 117.76C99.024 131.413 103.461 142.336 112.336 150.528C121.552 158.72 133.499 162.816 148.176 162.816C158.075 162.816 166.779 160.939 174.288 157.184C181.797 153.429 187.6 148.139 191.696 141.312C195.792 134.485 197.84 126.464 197.84 117.248C197.84 108.373 195.792 100.693 191.696 94.208C187.6 87.3813 181.797 82.0907 174.288 78.336C166.779 74.24 157.904 72.192 147.664 72.192Z"
          />
        </svg>
        <div class="rd-background-divider"></div>
        <svg
          class="rd-background-svg-2"
          viewBox="0 0 1587 373"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M683.37 372.74C786.299 372.74 869.74 289.299 869.74 186.37C869.74 83.4407 786.299 0 683.37 0C580.441 0 497 83.4407 497 186.37C497 289.299 580.441 372.74 683.37 372.74ZM682.851 280.334C734.459 280.334 776.295 238.497 776.295 186.889C776.295 135.281 734.459 93.4446 682.851 93.4446C631.243 93.4446 589.406 135.281 589.406 186.889C589.406 238.497 631.243 280.334 682.851 280.334Z"
          />
          <circle cx="683.37" cy="186.37" r="79.4279" />
          <path d="M0 365.4V7H101.376V365.4H0Z" />
          <path
            d="M1007.18 145.752H1173.58V221.528H1007.18V145.752ZM1014.35 287.064H1201.74V365.4H914V7H1195.09V85.336H1014.35V287.064Z"
          />
          <path
            d="M1246 365.4V7H1329.46L1527.09 245.592H1487.66V7H1586.99V365.4H1503.54L1305.9 126.808H1345.33V365.4H1246Z"
          />
          <path
            d="M343.12 372.736C314.789 372.736 288.507 368.299 264.272 359.424C240.379 350.208 219.557 337.237 201.808 320.512C184.4 303.787 170.747 284.16 160.848 261.632C150.949 238.763 146 213.675 146 186.368C146 159.061 150.949 134.144 160.848 111.616C170.747 88.7467 184.4 68.9493 201.808 52.224C219.557 35.4987 240.379 22.6987 264.272 13.824C288.507 4.608 314.789 0 343.12 0C376.229 0 405.755 5.80267 431.696 17.408C457.979 29.0133 479.824 45.7387 497.232 67.584L432.72 125.952C421.115 112.299 408.315 101.888 394.32 94.72C380.667 87.552 365.307 83.968 348.24 83.968C333.563 83.968 320.08 86.3574 307.792 91.136C295.504 95.9147 284.923 102.912 276.048 112.128C267.515 121.003 260.688 131.755 255.568 144.384C250.789 157.013 248.4 171.008 248.4 186.368C248.4 201.728 250.789 215.723 255.568 228.352C260.688 240.981 267.515 251.904 276.048 261.12C284.923 269.995 295.504 276.821 307.792 281.6C320.08 286.379 333.563 288.768 348.24 288.768C365.307 288.768 380.667 285.184 394.32 278.016C408.315 270.848 421.115 260.437 432.72 246.784L497.232 305.152C479.824 326.656 457.979 343.381 431.696 355.328C405.755 366.933 376.229 372.736 343.12 372.736Z"
          />
        </svg>
        <div class="rd-decoration-box-container rd-decoration-1">
          <div class="rd-decoration-box-2">
            <div v-for="n in 6" :key="n" class="rd-decoration-stripe"></div>
          </div>
          <div class="rd-decoration-box-3">
            <div class="rd-decoration-box"></div>
          </div>
        </div>
        <div class="rd-decoration-box-container rd-decoration-2">
          <div class="rd-decoration-box-4">
            <div class="rd-decoration-box-outer">
              <div class="rd-decoration-box"></div>
            </div>
            <div class="rd-decoration-box-inner">
              <div class="rd-decoration-box"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="rd-introduction-section">
        <div class="rd-caption">
          <div class="rd-text-row rd-text-row-uppercase rd-headline-3">
            The 9<span class="rd-text-superscript rd-headline-6">th</span>
          </div>
          <div class="rd-text-row rd-text-row-uppercase rd-headline-3">
            International Conference
          </div>
          <div class="rd-text-row rd-text-row-uppercase rd-headline-3">
            On Entrepreneurship 2022
          </div>
        </div>
        <div class="rd-date">
          <div class="rd-text-row rd-text-row-uppercase rd-headline-4">
            <span class="rd-text-highlight">27 August</span> 2022<span
              class="rd-text-decoration"
            ></span>
          </div>
        </div>
      </div>
      <div class="rd-section rd-about-section">
        <div class="rd-section-caption">
          <div class="rd-text-row rd-text-row-uppercase rd-headline-4">
            About<span
              class="rd-text-decoration rd-text-decoration-primary"
            ></span>
          </div>
        </div>
        <div class="rd-section-title">
          <div class="rd-text-row rd-headline-2">
            <span class="rd-text-highlight rd-text-highlight-primary"
              >Sustainable Business</span
            >
          </div>
          <div class="rd-text-row rd-headline-2">Through Digitalization</div>
        </div>
        <div class="rd-section-paragraph">
          <div class="rd-text-row rd-body-text">
            The Indonesian economy based on the amount of Gross Domestic Product
            (GDP) based on current prices in the second quarter of 2019 reached
            Rp3,963.5 trillion and at the base of constant prices reached
            Rp2,735.2 trillion. Indonesia’s economy in the second quarter of
            2019 compared to the second quarter of 2018 grew 5.05 percent
            (y-on-y). From the production side, growth was driven by almost all
            business fields, where the highest growth was achieved by Other
            Service Business Fields which grew 10.73 percent.
          </div>
          <!-- <div class="rd-text-row rd-body-text">The Indonesian economy based on the amount of Gross Domestic Product (GDP) based on</div>
          <div class="rd-text-row rd-body-text">current prices in the second quarter of 2019 reached Rp3,963.5 trillion and at the base of</div>
          <div class="rd-text-row rd-body-text">constant prices reached Rp2,735.2 trillion. Indonesia's economy in the second quarter of 2019</div>
          <div class="rd-text-row rd-body-text">compared to the second quarter of 2018 grew 5.05 percent (y-on-y). From the production side,</div>
          <div class="rd-text-row rd-body-text">growth was driven by almost all business fields, where the highest growth was achieved by Other</div>
          <div class="rd-text-row rd-body-text">Service Business Fields which grew 10.73 percent.</div> -->
        </div>
        <div class="rd-section-action">
          <button class="rd-button">
            <span class="rd-button-border"></span>
            <span class="rd-button-title rd-caption-text">read more</span>
          </button>
        </div>
        <div class="rd-section-decoration">
          <div class="rd-decoration-box-1">
            <div v-for="n in 6" :key="n" class="rd-decoration-stripe"></div>
          </div>
          <div class="rd-decoration-box-2">
            <div class="rd-decoration-box-outer">
              <div class="rd-decoration-box"></div>
            </div>
            <div class="rd-decoration-box-inner">
              <div class="rd-decoration-box"></div>
              <div class="rd-decoration-box"></div>
              <div class="rd-decoration-box"></div>
              <div class="rd-decoration-box"></div>
            </div>
          </div>
          <div class="rd-decoration-box-3">
            <div v-for="n in 6" :key="n" class="rd-decoration-stripe"></div>
          </div>
          <div class="rd-decoration-box-4">
            <div class="rd-decoration-box-outer">
              <div class="rd-decoration-box"></div>
            </div>
            <div class="rd-decoration-box-inner">
              <div class="rd-decoration-box"></div>
            </div>
          </div>
          <div class="rd-decoration-box-1">
            <div v-for="n in 6" :key="n" class="rd-decoration-stripe"></div>
          </div>
          <div class="rd-decoration-box-2">
            <div class="rd-decoration-box-outer">
              <div class="rd-decoration-box"></div>
            </div>
            <div class="rd-decoration-box-inner">
              <div class="rd-decoration-box"></div>
              <div class="rd-decoration-box"></div>
              <div class="rd-decoration-box"></div>
              <div class="rd-decoration-box"></div>
            </div>
          </div>
          <div class="rd-decoration-box-3">
            <div v-for="n in 6" :key="n" class="rd-decoration-stripe"></div>
          </div>
          <div class="rd-decoration-box-4">
            <div class="rd-decoration-box-outer">
              <div class="rd-decoration-box"></div>
            </div>
            <div class="rd-decoration-box-inner">
              <div class="rd-decoration-box"></div>
            </div>
          </div>
          <div class="rd-decoration-box-1">
            <div v-for="n in 6" :key="n" class="rd-decoration-stripe"></div>
          </div>
          <div class="rd-decoration-box-2">
            <div class="rd-decoration-box-outer">
              <div class="rd-decoration-box"></div>
            </div>
            <div class="rd-decoration-box-inner">
              <div class="rd-decoration-box"></div>
              <div class="rd-decoration-box"></div>
              <div class="rd-decoration-box"></div>
              <div class="rd-decoration-box"></div>
            </div>
          </div>
          <div class="rd-decoration-box-3">
            <div v-for="n in 6" :key="n" class="rd-decoration-stripe"></div>
          </div>
          <div class="rd-decoration-box-4">
            <div class="rd-decoration-box-outer">
              <div class="rd-decoration-box"></div>
            </div>
            <div class="rd-decoration-box-inner">
              <div class="rd-decoration-box"></div>
            </div>
          </div>
          <div class="rd-decoration-box-1">
            <div v-for="n in 6" :key="n" class="rd-decoration-stripe"></div>
          </div>
          <div class="rd-decoration-box-2">
            <div class="rd-decoration-box-outer">
              <div class="rd-decoration-box"></div>
            </div>
            <div class="rd-decoration-box-inner">
              <div class="rd-decoration-box"></div>
              <div class="rd-decoration-box"></div>
              <div class="rd-decoration-box"></div>
              <div class="rd-decoration-box"></div>
            </div>
          </div>
          <div class="rd-decoration-box-3">
            <div v-for="n in 6" :key="n" class="rd-decoration-stripe"></div>
          </div>
          <div class="rd-decoration-box-4">
            <div class="rd-decoration-box-outer">
              <div class="rd-decoration-box"></div>
            </div>
            <div class="rd-decoration-box-inner">
              <div class="rd-decoration-box"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="rd-gap-section"></div>
      <div class="rd-section rd-rundown-section">
        <div class="rd-section-caption">
          <div class="rd-text-row rd-text-row-uppercase rd-headline-4">
            Rundown<span
              class="rd-text-decoration rd-text-decoration-primary"
            ></span>
          </div>
        </div>
        <div class="rd-section-data-container">
          <div class="rd-section-data">
            <div class="rd-section-data-time">
              <div class="rd-text-row rd-text-row-uppercase rd-headline-5">
                12:35 - 13:05 WIB
              </div>
            </div>
            <div class="rd-section-data-speaker">
              <div class="rd-text-row rd-headline-3">J.E Susanto</div>
            </div>
            <div class="rd-section-data-remark">
              <div class="rd-text-row rd-headline-6">
                Universitas Ciputra, Indonesia
              </div>
            </div>
            <div class="rd-section-data-title">
              <div class="rd-text-row rd-headline-5">
                Welcoming Speech from the Conference Chair
              </div>
            </div>
          </div>
          <div class="rd-section-data">
            <div class="rd-section-data-time">
              <div class="rd-text-row rd-text-row-uppercase rd-headline-5">
                13:05 - 14:05 WIB
              </div>
            </div>
            <div class="rd-section-data-speaker">
              <div class="rd-text-row rd-headline-3">
                Sandiaga Salahuddin Uno
              </div>
            </div>
            <div class="rd-section-data-remark">
              <div class="rd-text-row rd-headline-6">
                Minister of Tourism and Creative Economy of Indonesia
              </div>
            </div>
            <div class="rd-section-data-title">
              <div class="rd-text-row rd-headline-5">
                Inclusive design for a digital world
              </div>
            </div>
          </div>
          <div class="rd-section-data">
            <div class="rd-section-data-time">
              <div class="rd-text-row rd-text-row-uppercase rd-headline-5">
                14:05 - 14:35 WIB
              </div>
            </div>
            <div class="rd-section-data-speaker">
              <div class="rd-text-row rd-headline-3">
                Christina Whidya Utami
              </div>
            </div>
            <div class="rd-section-data-remark">
              <div class="rd-text-row rd-headline-6">
                Universitas Ciputra, Indonesia
              </div>
            </div>
            <div class="rd-section-data-title">
              <div class="rd-text-row rd-headline-5">
                Enabling ethical Design
              </div>
            </div>
          </div>
          <div class="rd-section-data">
            <div class="rd-section-data-time">
              <div class="rd-text-row rd-text-row-uppercase rd-headline-5">
                14:35 - 15:05 WIB
              </div>
            </div>
            <div class="rd-section-data-speaker">
              <div class="rd-text-row rd-headline-3">Tao Wang</div>
            </div>
            <div class="rd-section-data-remark">
              <div class="rd-text-row rd-headline-6">
                Nanjing Normal University, China
              </div>
            </div>
            <div class="rd-section-data-title">
              <div class="rd-text-row rd-headline-5">
                Design with Mental Health in Mind
              </div>
            </div>
          </div>
          <div class="rd-section-data">
            <div class="rd-section-data-time">
              <div class="rd-text-row rd-text-row-uppercase rd-headline-5">
                15:05 - 15:35 WIB
              </div>
            </div>
            <div class="rd-section-data-speaker">
              <div class="rd-text-row rd-headline-3">Arnold J.</div>
            </div>
            <div class="rd-section-data-remark">
              <div class="rd-text-row rd-headline-6">
                The University of Western, Australia
              </div>
            </div>
            <div class="rd-section-data-title">
              <div class="rd-text-row rd-headline-5">
                Feminist data practices for inclusivity
              </div>
            </div>
          </div>
          <div class="rd-section-data">
            <div class="rd-section-data-time">
              <div class="rd-text-row rd-text-row-uppercase rd-headline-5">
                15:35 - 16:05 WIB
              </div>
            </div>
            <div class="rd-section-data-speaker">
              <div class="rd-text-row rd-headline-3">Nilay Balkan</div>
            </div>
            <div class="rd-section-data-remark">
              <div class="rd-text-row rd-headline-6">
                University of Glasgow, United Kingdom
              </div>
            </div>
            <div class="rd-section-data-title">
              <div class="rd-text-row rd-headline-5">
                Where do we go from here?
              </div>
            </div>
          </div>
          <div class="rd-section-data">
            <div class="rd-section-data-time">
              <div class="rd-text-row rd-text-row-uppercase rd-headline-5">
                16:05 - 16:15 WIB
              </div>
            </div>
            <div class="rd-section-data-speaker">
              <div class="rd-text-row rd-headline-3">J.E Susanto</div>
            </div>
            <div class="rd-section-data-remark">
              <div class="rd-text-row rd-headline-6">
                Universitas Ciputra, Indonesia
              </div>
            </div>
            <div class="rd-section-data-title">
              <div class="rd-text-row rd-headline-5">Closing Speech</div>
            </div>
          </div>
        </div>
        <div class="rd-section-decoration">
          <div class="rd-decoration-box-0">
            <div v-for="n in 20" :key="n" class="rd-decoration-box"></div>
          </div>
          <div class="rd-decoration-box-1">
            <div v-for="n in 6" :key="n" class="rd-decoration-stripe"></div>
          </div>
          <div class="rd-decoration-box-2">
            <div class="rd-decoration-box-outer">
              <div class="rd-decoration-box"></div>
            </div>
            <div class="rd-decoration-box-inner">
              <div class="rd-decoration-box"></div>
              <div class="rd-decoration-box"></div>
              <div class="rd-decoration-box"></div>
              <div class="rd-decoration-box"></div>
            </div>
          </div>
          <div class="rd-decoration-box-3">
            <div v-for="n in 6" :key="n" class="rd-decoration-stripe"></div>
          </div>
          <div class="rd-decoration-box-4">
            <div class="rd-decoration-box-outer">
              <div class="rd-decoration-box"></div>
            </div>
            <div class="rd-decoration-box-inner">
              <div class="rd-decoration-box"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="rd-gap-section"></div>
      <div class="rd-section rd-footer-section">
        <div class="rd-section-caption">
          <div class="rd-text-row rd-text-row-uppercase rd-headline-4">
            Thank you<span
              class="rd-text-decoration rd-text-decoration-primary"
            ></span>
          </div>
        </div>
        <div class="rd-section-body">
          <div class="rd-footer-collab">
            <div class="rd-footer-placeholder">
              <div
                class="rd-text-row rd-text-row-uppercase rd-placeholder-text"
              >
                in collaboration with
              </div>
            </div>
          </div>
          <div class="rd-footer-support">
            <div class="rd-footer-placeholder">
              <div
                class="rd-text-row rd-text-row-uppercase rd-placeholder-text"
              >
                supported by
              </div>
            </div>
          </div>
        </div>
        <div class="rd-section-footer">
          <div class="rd-section-footer-contact">
            <div class="rd-footer-email">
              <div class="rd-footer-placeholder">
                <div
                  class="rd-text-row rd-text-row-uppercase rd-placeholder-text"
                >
                  get in touch
                </div>
              </div>
              <div class="rd-footer-values">
                <div class="rd-text-row rd-text-row-uppercase rd-headline-5">
                  icoen@ciputra.ac.id
                </div>
              </div>
            </div>
            <div class="rd-footer-social">
              <div class="rd-footer-placeholder">
                <div
                  class="rd-text-row rd-text-row-uppercase rd-placeholder-text"
                >
                  follow us
                </div>
              </div>
              <div class="rd-footer-values">
                <div class="rd-text-row rd-text-row-uppercase rd-headline-5">
                  facebook
                </div>
                <div class="rd-text-row rd-text-row-uppercase rd-headline-5">
                  instagram
                </div>
              </div>
            </div>
          </div>
          <div class="rd-section-footer-end">
            <div class="rd-footer-copyright">
              <div class="rd-text-row rd-text-row-uppercase rd-headline-6">
                {{
                  baseState.viewMode === "desktop"
                    ? "© All rights reserved Universitas Ciputra 2022"
                    : "© All rights reserved UC 2022"
                }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { baseStore } from "./store/base";

  const baseState = baseStore.getState();

  function resizeHandler(e: MediaQueryList | MediaQueryListEvent) {
    if (e.matches) baseStore.setViewMode("mobile");
    else baseStore.setViewMode("desktop");
  }

  onMounted(() => {
    const event = new Event("resize");
    window.addEventListener("resize", () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
    window.dispatchEvent(event);

    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    mediaQuery.addEventListener("change", resizeHandler);
    resizeHandler(mediaQuery);
  });
</script>

<style lang="scss" scoped>
  .rd-layout {
    position: relative;
    width: 100vw;
    height: 100vh;
    height: calc((var(--vh, 1vh) * 100));
    background: var(--primary-color);
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    .rd-decoration-box-container {
      width: 10rem;
      height: 10rem;
      .rd-decoration-box-1 {
        position: absolute;
        top: 0;
        left: 0;
        width: 5rem;
        height: 5rem;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        .rd-decoration-stripe {
          position: relative;
          width: 100%;
          height: 0.5rem;
          background: var(--font-color);
        }
      }
      .rd-decoration-box-2 {
        position: absolute;
        top: 0;
        right: 0;
        width: 5rem;
        height: 5rem;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .rd-decoration-stripe {
          position: relative;
          width: 0.5rem;
          height: 100%;
          background: var(--font-color);
        }
      }
      .rd-decoration-box-3 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 5rem;
        height: 5rem;
        overflow: hidden;
        .rd-decoration-box {
          position: relative;
          width: 100%;
          height: 100%;
          background: var(--font-color);
        }
      }
      .rd-decoration-box-4 {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 5rem;
        height: 5rem;
        overflow: hidden;
        .rd-decoration-box-outer {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          .rd-decoration-box {
            position: relative;
            width: 100%;
            height: 100%;
            border: 1rem solid var(--font-color);
            box-sizing: border-box;
          }
        }
        .rd-decoration-box-inner {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          width: 2rem;
          height: 2rem;
          overflow: hidden;
          .rd-decoration-box {
            position: relative;
            width: 100%;
            height: 100%;
            background: var(--font-light-color);
          }
        }
      }
    }
    .rd-text-row {
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      span.rd-text-superscript {
        position: relative;
        text-transform: uppercase;
        line-height: 0.75;
      }
      span.rd-text-highlight {
        color: var(--font-light-color);
        margin-right: 0.25rem;
        &.rd-text-highlight-primary {
          color: var(--primary-color);
        }
      }
      .rd-text-decoration {
        position: absolute;
        top: -0.5rem;
        right: -0.5rem;
        width: 0.5rem;
        height: 0.5rem;
        background: var(--font-light-color);
        &.rd-text-decoration-primary {
          background: var(--primary-color);
        }
      }
      &.rd-text-row-uppercase {
        line-height: 0.75;
        text-transform: uppercase;
        margin-bottom: 0.25rem;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .rd-mouse {
      z-index: 2;
      position: fixed;
      right: 3rem;
      bottom: 3rem;
      width: 1.25rem;
      height: 1.75rem;
      border: 2px solid var(--font-color);
      border-radius: 0.625rem;
      box-sizing: border-box;
      .rd-mouse-scroll {
        position: absolute;
        top: 8px;
        left: calc(50% - 1px);
        width: 2px;
        height: 0.375rem;
        border-radius: 1px;
        overflow: hidden;
        &::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: var(--font-light-color);
          border-radius: 1px;
          transform-origin: center top;
          animation: rd-mouse-scroll-indicator 1.5s ease infinite;
        }
      }
    }
    .rd-navigation-bar {
      z-index: 3;
      position: fixed;
      top: 0;
      left: 0;
      width: 3rem;
      height: 100%;
      background: var(--primary-color);
      border-right: 0.125rem solid var(--font-color);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .rd-navigation-button {
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .rd-navigation-button-bar {
          pointer-events: none;
          position: absolute;
          top: 50%;
          width: 1.5px;
          height: 1rem;
          background: var(--font-color);
          &:first-child {
            transform: translateY(-0.5rem) translateX(-0.125rem);
          }
          &:last-child {
            transform: translateY(-0.5rem) translateX(0.125rem);
          }
        }
      }
      .rd-logo-container {
        position: absolute;
        top: calc(50% - 1.5rem);
        left: 0;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: rotate(-90deg);
        transform-origin: 1.5rem center;
        svg.rd-logo {
          position: relative;
          height: 1rem;
          path {
            fill: var(--font-color);
          }
          circle {
            fill: var(--font-light-color);
          }
        }
      }
      button.rd-register-button {
        cursor: pointer;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3rem;
        padding: 0 1rem;
        background: var(--font-color);
        transform: rotate(-90deg);
        transform-origin: 1.5rem center;
        display: flex;
        justify-content: center;
        align-items: center;
        span.rd-register-button-title {
          position: relative;
          color: var(--font-light-color);
        }
      }
    }
    .rd-body {
      position: relative;
      width: calc(100% - 3rem);
      height: 100%;
      margin-left: 3rem;
      overflow-x: scroll;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      * {
        flex-shrink: 0;
      }
      .rd-section {
        padding: 3rem;
        border-left: 3px solid var(--font-color);
        border-right: 3px solid var(--font-color);
        box-sizing: border-box;
        &:last-child {
          border-right: none;
        }
      }
      .rd-section-decoration {
        position: absolute;
        bottom: 3rem;
        left: 0;
        width: 100%;
        height: 3rem;
        overflow: hidden;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        .rd-decoration-box-0 {
          position: relative;
          width: 3rem;
          height: 3rem;
          overflow: hidden;
          gap: 0.3rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
          .rd-decoration-box {
            position: relative;
            width: 0.525rem;
            height: 0.525rem;
            background: var(--primary-color);
          }
        }
        .rd-decoration-box-1 {
          position: relative;
          width: 3rem;
          height: 3rem;
          overflow: hidden;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          .rd-decoration-stripe {
            position: relative;
            width: 0.3rem;
            height: 100%;
            background: var(--primary-color);
          }
        }
        .rd-decoration-box-2 {
          position: relative;
          width: 3rem;
          height: 3rem;
          overflow: hidden;
          .rd-decoration-box-outer {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            .rd-decoration-box {
              position: relative;
              width: 100%;
              height: 100%;
              border: 0.6rem solid var(--font-color);
              box-sizing: border-box;
            }
          }
          .rd-decoration-box-inner {
            position: absolute;
            top: 0.9rem;
            left: 0.9rem;
            width: 1.2rem;
            height: 1.2rem;
            overflow: hidden;
            gap: 0.3rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: flex-start;
            .rd-decoration-box {
              position: relative;
              width: 0.45rem;
              height: 0.45rem;
              background: var(--primary-color);
            }
          }
        }
        .rd-decoration-box-3 {
          position: relative;
          width: 3rem;
          height: 3rem;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          .rd-decoration-stripe {
            position: relative;
            width: 100%;
            height: 0.3rem;
            background: var(--primary-color);
          }
        }
        .rd-decoration-box-4 {
          position: relative;
          width: 3rem;
          height: 3rem;
          overflow: hidden;
          .rd-decoration-box-outer {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            .rd-decoration-box {
              position: relative;
              width: 100%;
              height: 100%;
              border: 0.6rem solid var(--font-color);
              box-sizing: border-box;
            }
          }
          .rd-decoration-box-inner {
            position: absolute;
            top: 0.9rem;
            left: 0.9rem;
            width: 1.2rem;
            height: 1.2rem;
            overflow: hidden;
            .rd-decoration-box {
              position: relative;
              width: 100%;
              height: 100%;
              background: var(--primary-color);
            }
          }
        }
      }
      .rd-date,
      .rd-section-caption {
        position: absolute;
        top: 3rem;
        right: 3rem;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
      }
      button.rd-button {
        cursor: pointer;
        height: 2rem;
        padding-right: 1rem;
        background: var(--font-color);
        display: flex;
        justify-content: center;
        align-items: center;
        span.rd-button-border {
          position: relative;
          width: 0.25rem;
          height: 100%;
          margin-right: 0.75rem;
          background: var(--primary-color);
        }
        span.rd-button-title {
          position: relative;
          color: var(--font-light-color);
        }
      }
      .rd-background {
        position: absolute;
        top: 0;
        left: 3rem;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .rd-background-divider {
          position: relative;
          width: 25vw;
          height: 4rem;
          // background: var(--font-color);
          background: var(--font-light-color);
          margin: 0 5vw;
        }
        svg.rd-background-svg-1 {
          position: relative;
          height: 20vw;
          * {
            fill: var(--font-color);
          }
        }
        svg.rd-background-svg-2 {
          position: relative;
          height: 20vw;
          path {
            fill: var(--font-color);
          }
          circle {
            fill: var(--font-light-color);
          }
        }
        .rd-decoration-1 {
          position: absolute;
          top: 0;
          left: 0;
        }
        .rd-decoration-2 {
          position: absolute;
          left: 40rem;
          bottom: 3rem;
        }
      }
      .rd-gap-section {
        position: relative;
        width: 50vw;
        height: 100%;
      }
      .rd-introduction-section {
        position: relative;
        width: calc(100vw - 3rem);
        height: 100%;
        .rd-caption {
          position: absolute;
          bottom: 3rem;
          left: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
        }
        .rd-date {
          position: absolute;
          top: 3rem;
          right: 3rem;
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
        }
      }
      .rd-about-section {
        position: relative;
        width: calc(50vw - 1.5rem);
        height: 100%;
        background: var(--font-light-color);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .rd-section-title {
          position: relative;
          width: 100%;
          margin-top: 5rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
        }
        .rd-section-paragraph {
          position: relative;
          width: 100%;
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
        }
        .rd-section-action {
          position: relative;
          margin-top: 3rem;
          display: flex;
        }
      }
      .rd-rundown-section {
        position: relative;
        width: calc(100vw - 3.125rem);
        height: 100%;
        background: var(--font-light-color);
        display: flex;
        flex-grow: 5;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .rd-section-data-container {
          position: relative;
          height: 100%;
          padding: 5rem 0 3rem 0;
          box-sizing: border-box;
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          .rd-section-data {
            position: relative;
            width: calc((100vw - 9.25rem) / 3);
            height: calc(100% / 3);
            padding: 0 2rem 1rem 0;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            .rd-section-data-time {
              position: relative;
            }
            .rd-section-data-speaker {
              position: relative;
              margin-top: 0.5rem;
              color: var(--primary-color);
            }
            .rd-section-data-remark {
              position: relative;
              margin-top: 0.5rem;
              opacity: 0.5;
            }
            .rd-section-data-title {
              position: relative;
              margin-top: 0.5rem;
              .rd-text-row {
                line-height: 1.25;
              }
            }
            &::after {
              content: "";
              position: absolute;
              bottom: 1.5rem;
              left: 0;
              width: calc(100% - 2rem);
              height: 1.5px;
              background: var(--font-color);
              opacity: 0.125;
            }
          }
        }
        .rd-section-decoration {
          padding: 0 3rem;
          box-sizing: border-box;
          justify-content: space-between;
        }
      }
      .rd-footer-section {
        position: relative;
        width: calc(50vw - 1.5rem);
        height: 100%;
        background: var(--font-light-color);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .rd-section-body {
          position: relative;
          width: 100%;
          height: calc(100% - 5rem);
          padding-top: 5rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          .rd-footer-collab {
            position: relative;
            width: 100%;
            height: calc(100% / 3);
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
          }
          .rd-footer-support {
            position: relative;
            width: 100%;
            height: calc(100% * 2 / 3);
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
          }
        }
        .rd-section-footer {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 8rem;
          background: var(--font-color);
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          .rd-section-footer-contact {
            position: relative;
            width: 100%;
            height: 5rem;
            padding: 1.5rem 3rem;
            box-sizing: border-box;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .rd-footer-email,
            .rd-footer-social {
              position: relative;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: flex-start;
              .rd-footer-placeholder {
                position: relative;
                color: var(--font-light-color);
              }
              .rd-footer-values {
                position: relative;
                color: var(--primary-color);
                gap: 1rem;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                .rd-text-row {
                  margin: 0;
                }
              }
            }
            .rd-footer-social {
              margin-left: 4rem;
            }
          }
          .rd-section-footer-end {
            position: relative;
            width: 100%;
            height: 3rem;
            border-top: 0.125rem solid var(--font-light-color);
            padding: 0 3rem;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .rd-footer-copyright {
              position: relative;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              .rd-text-row {
                color: var(--font-light-color);
              }
            }
          }
        }
      }
    }
    @keyframes rd-mouse-scroll-indicator {
      0% {
        transform: scaleY(0) translateZ(0);
      }
      50% {
        transform: scaleX(1) translateZ(0);
      }
      to {
        transform: scaleX(1) translate3d(0, 100%, 0);
      }
    }
    @media screen and (max-width: 1024px) {
      flex-direction: column;
      .rd-decoration-box-container {
        display: none;
      }
      .rd-text-row {
        &.rd-text-row-uppercase {
          margin-bottom: 0.125rem;
        }
      }
      .rd-mouse {
        display: none;
      }
      .rd-navigation-bar {
        width: 100%;
        height: 3rem;
        border-right: none;
        border-bottom: 0.125rem solid var(--font-color);
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        .rd-navigation-button {
          .rd-navigation-button-bar {
            width: 1rem;
            height: 1.5px;
            &:first-child {
              transform: translateY(-0.125rem);
            }
            &:last-child {
              transform: translateY(0.125rem);
            }
          }
        }
        .rd-logo-container {
          top: 0;
          left: 3rem;
          transform: none;
        }
        button.rd-register-button {
          top: 0;
          right: 0;
          transform: none;
          bottom: auto;
          left: auto;
        }
      }
      .rd-body {
        width: 100%;
        height: auto;
        margin-left: 0;
        margin-top: 3rem;
        overflow-x: hidden;
        overflow-y: auto;
        flex-direction: column;
        .rd-section {
          padding: 1.5rem;
          border: none;
        }
        .rd-date,
        .rd-section-caption {
          top: 1.5rem !important;
          right: 1.5rem !important;
        }
        .rd-section-decoration {
          display: none;
        }
        .rd-gap-section {
          display: none;
        }
        .rd-background {
          left: 0;
          width: calc(100vh - 3rem);
          height: 100vw;
          transform: rotate(90deg);
          transform-origin: 50vw center;
          justify-content: center;
          .rd-background-divider {
            height: 0.6rem;
            width: 15vw;
          }
          svg.rd-background-svg-1 {
            height: 17.5vw;
          }
          svg.rd-background-svg-2 {
            height: 17.5vw;
            margin-right: 2rem;
          }
        }
        .rd-introduction-section {
          width: 100vw;
          height: calc(100vh - 3rem);
          .rd-caption {
            bottom: 1.5rem;
            left: 1.5rem;
          }
        }
        .rd-about-section {
          width: 100vw;
          height: auto;
          .rd-section-title {
            margin-top: 3rem;
          }
        }
        .rd-rundown-section {
          width: 100vw;
          height: auto;
          .rd-section-data-container {
            width: 100%;
            height: auto;
            padding: 3rem 0 0 0;
            flex-wrap: nowrap;
            .rd-section-data {
              width: 100%;
              height: auto;
              padding: 1rem 0;
              &:first-child {
                padding: 0 0 1rem 0;
              }
              &::after {
                width: 100%;
                bottom: 0;
              }
              &:last-child::after {
                display: none;
              }
            }
          }
        }
        .rd-footer-section {
          width: 100vw;
          height: auto;
          padding: 1.5rem 1.5rem 0 1.5rem;
          .rd-section-body {
            height: auto;
            padding-top: 3rem;
            .rd-footer-collab {
              height: 5rem;
            }
            .rd-footer-support {
              height: 10rem;
            }
          }
          .rd-section-footer {
            position: relative;
            top: 1px;
            left: -1.5rem;
            width: calc(100vw + 1px);
            .rd-section-footer-contact {
              height: auto;
              padding: 1.5rem;
              flex-direction: column;
              align-items: flex-start;
              .rd-footer-email,
              .rd-footer-social {
                height: 1.5rem;
              }
              .rd-footer-social {
                margin-top: 1.5rem;
                margin-left: 0;
              }
            }
            .rd-section-footer-end {
              background: var(--font-color);
              padding: 0 1.5rem;
            }
          }
        }
      }
    }
  }
</style>

<style lang="scss">
  ::-webkit-scrollbar {
    display: none;
  }

  :root {
    user-select: none;
    --var: 1vh;
    --font-color: #282b34;
    --font-light-color: #fff;
    --primary-color: #38c577;
    --secondary-color: #6ed0d3;
  }

  html,
  body {
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 24px;
    color: var(--font-color);
    word-spacing: 1px;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    @media only screen and (max-width: 1919px) and (min-width: 1600px) {
      font-size: 22px;
    }
    @media only screen and (max-width: 1599px) and (min-width: 1480px) {
      font-size: 21px;
    }
    @media only screen and (max-width: 1479px) and (min-width: 1380px) {
      font-size: 20px;
    }
    @media only screen and (max-width: 1379px) and (min-width: 1320px) {
      font-size: 19px;
    }
    @media only screen and (max-width: 1319px) and (min-width: 1025px) {
      font-size: 18px;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 24px;
      .rd-headline-2 {
        font-size: 1rem;
      }
      .rd-headline-3 {
        font-size: 0.85rem;
      }
      .rd-headline-4 {
        font-size: 0.7rem;
      }
      .rd-headline-5 {
        font-size: 0.625rem;
      }
      .rd-caption-text {
        font-size: 0.55rem;
      }
      .rd-body-text {
        font-size: 0.6rem;
      }
    }
    @media only screen and (max-width: 410px) and (min-width: 321px) {
      font-size: 18px;
    }
    @media only screen and (max-width: 320px) {
      font-size: 17px;
    }
  }

  button {
    outline: none;
    border: none;
    padding: 0;
  }

  .rd-headline-1 {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 3rem;
    text-transform: uppercase;
    line-height: 1;
  }
  .rd-headline-2 {
    font-size: 2rem;
    font-family: "Montserrat";
    font-weight: 700;
    line-height: 1;
  }
  .rd-headline-3 {
    font-size: 1.25rem;
    font-family: "Montserrat";
    font-weight: 700;
    line-height: 1;
  }
  .rd-headline-4 {
    font-size: 1rem;
    font-family: "Montserrat";
    font-weight: 700;
    line-height: 1;
  }
  .rd-headline-5 {
    font-size: 0.75rem;
    font-family: "Montserrat";
    font-weight: 700;
    line-height: 1;
  }
  .rd-headline-6 {
    font-size: 0.55rem;
    font-family: "Montserrat";
    font-weight: 700;
    line-height: 1;
  }
  .rd-caption-text {
    font-family: "Montserrat";
    font-size: 0.65rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
  }
  .rd-body-text {
    font-family: "Montserrat";
    font-size: 0.75rem;
    font-weight: 500;
  }
  .rd-placeholder-text {
    font-family: "Montserrat";
    font-size: 0.55rem;
    font-weight: 500;
    line-height: 1;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
  }
</style>
