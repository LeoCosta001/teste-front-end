$('#discountShelfCarouselItemContainer').html(inject_discountShelf());

function inject_discountShelf() {
  let result = '';

  env.allProducts.forEach((value, index) => {
    result += `
      <div class="discountshelf__carousel__item__container">
        <div class="discountshelf__carousel__item" data-discountshelfitem="${index}">
          <div class="discountshelf__carousel__item__image__container">
            <img  class="discountshelf__carousel__item__image"src="${
              value.productImages[0]
            }"></img>
            <div class="discountshelf__carousel__item__type">
            ${
              value.productIsOrganic
                ? `
              <div class="discountshelf__carousel__item__type__border">
                <svg width="10" height="20" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path class="svg--producttype__organic" d="M4.24115 15.7469L4.24183 12.3097C6.62678 12.2132 7.99948 10.66 8 8.00787C8.00043 5.82684 6.07642 2.38996 4.92198 0.523248C4.71284 0.200502 4.37815 0.00864327 4.00158 0C3.63338 7.9026e-05 3.28188 0.192085 3.08097 0.523644C1.93416 2.38212 0.000427399 5.82856 1.50795e-07 7.99214C-0.000523573 10.6443 1.36318 12.2056 3.75647 12.2923L3.75579 15.7471C3.75576 15.8866 3.86453 16 3.99842 16C4.13231 16 4.24112 15.8865 4.24115 15.7469ZM4.23386 10.2944L6.04176 8.4096C6.13383 8.31361 6.13386 8.15658 6.04183 8.06063C5.9498 7.96469 5.79917 7.96472 5.7071 8.0607L4.24236 9.58774L4.24279 7.44161L5.50665 6.124C5.59872 6.02801 5.59875 5.87098 5.50672 5.77503C5.41468 5.67909 5.26406 5.67912 5.17199 5.7751L4.2513 6.73495L4.25171 4.64117C4.25174 4.50158 4.14297 4.38819 4.00908 4.38822C3.87519 4.38825 3.76638 4.50169 3.76635 4.64127L3.76594 6.73506L2.84563 5.7756C2.7536 5.67966 2.60297 5.67969 2.5109 5.77567C2.41883 5.87166 2.4188 6.02869 2.51083 6.12464L3.77417 7.44171L3.77375 9.57039L2.30961 8.04398C2.21758 7.94804 2.06696 7.94807 1.97489 8.04406C1.88282 8.14004 1.88279 8.29707 1.97482 8.39302L3.77361 10.2683L3.77331 11.7863C2.44278 11.7255 0.501479 11.0978 0.502096 7.97458C0.485756 5.96804 2.36089 2.61758 3.48259 0.802729C3.59142 0.619499 3.78391 0.506045 3.99311 0.514724C4.20231 0.523403 4.39476 0.619327 4.50351 0.80251C5.6245 2.61688 7.50668 5.95781 7.50628 7.99925C7.50566 11.1225 5.55575 11.7423 4.23356 11.8124L4.23386 10.2944Z" fill="#3B6626"/>
                </svg>
              </div>`
                : ''
            }
            ${
              value.productIsMamboPlus
                ? `
                <svg class="discountshelf__carousel__item__mamboplus svg--mplus__icon" width="51" height="52" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path class="svg--mplus__icon--sub01" d="M40.9651 51.0187H10.035C4.52046 51.0187 5.81619e-05 46.4983 5.81619e-05 40.9838V10.0349C-0.0186987 4.52041 4.50171 0 10.035 0H40.9651C46.4796 0 51 4.52041 51 10.0349V40.965C51 46.4983 46.4796 51.0187 40.9651 51.0187Z" fill="#FF001F"/>
                  <path class="svg--mplus__icon--sub02" d="M5.8147 37.1386H13.2237L16.1872 22.9772C17.0688 18.7756 24.0089 17.9503 23.0147 22.7896L20.0136 37.1386H27.4226L29.9173 25.1342C30.5925 21.908 31.8117 19.5634 34.6815 19.5634C38.039 19.5634 37.1574 22.9959 36.7073 25.1342L34.1938 37.1386H41.6028L45.0166 20.7076C46.6672 12.7734 34.2501 11.6855 30.3299 17.7628C29.2045 12.0044 20.2387 13.2611 17.0501 17.4627H16.975L17.5753 14.5554H10.5227L5.8147 37.1386Z" fill="white"/>
                  <path class="svg--mplus__icon--sub03" d="M26.2972 43.1783C26.2409 43.2533 26.1096 43.3846 25.9408 43.5722C25.772 43.741 25.5469 43.9473 25.228 44.2099C24.9092 44.4725 24.4778 44.8289 23.9151 45.2415C23.2961 45.7105 22.7521 46.0293 22.2832 46.1606C21.8143 46.3107 21.4016 46.3482 21.0453 46.2919H21.0077C20.989 46.2919 20.9702 46.2919 20.9702 46.2919H20.9515H20.9327C20.7639 46.2544 20.6138 46.2169 20.4825 46.1419C20.3512 46.0856 20.2199 46.0106 20.1074 45.9168C19.8448 45.7667 19.6385 45.5604 19.5072 45.279L19.0758 46.4795C18.7569 47.6237 18.5506 48.599 18.438 49.368C18.3255 50.1371 18.3255 50.681 18.4193 50.9811C18.1755 50.9624 17.9504 50.9249 17.7253 50.8686C17.5377 50.8123 17.3314 50.7185 17.1438 50.5685C16.9563 50.4372 16.7874 50.2309 16.6374 49.987C16.5624 49.8745 16.5624 49.6119 16.6374 49.218C16.7124 48.8241 16.825 48.3552 16.9938 47.7925C17.1626 47.2298 17.3689 46.6108 17.6127 45.9168C17.8566 45.2228 18.1192 44.5288 18.3818 43.816C18.6444 43.1033 18.9257 42.3905 19.2258 41.6965C19.5072 41.0025 19.7885 40.3647 20.0324 39.7645C20.2762 39.1831 20.5201 38.6766 20.7264 38.2452C20.9327 37.8138 21.1015 37.5325 21.2141 37.3636C21.4391 37.4012 21.6642 37.4574 21.8706 37.4949C22.0394 37.5325 22.2082 37.6075 22.377 37.6638C22.5458 37.7388 22.6771 37.8138 22.7709 37.9264C22.6583 38.0952 22.5458 38.2827 22.4333 38.4891C22.3207 38.6766 22.2082 38.883 22.0769 39.1268C21.9456 39.3706 21.7955 39.6332 21.6267 39.9146C21.6642 39.8396 21.7205 39.7833 21.7393 39.7458C22.2082 39.0518 22.6021 38.5266 22.9209 38.1327C23.2398 37.7575 23.5399 37.5137 23.7838 37.4387C24.0276 37.3449 24.2339 37.4199 24.4027 37.6262C24.5715 37.8326 24.7216 38.1889 24.8341 38.6766C24.9467 39.0893 24.9654 39.5957 24.8904 40.1584C24.8341 40.7399 24.7028 41.3213 24.5153 41.9403C24.3277 42.5593 24.1026 43.1408 23.8213 43.7222C23.5399 44.3037 23.2398 44.7914 22.9022 45.204C23.2773 45.0165 23.6525 44.7726 24.0088 44.51C24.3652 44.2474 24.7028 43.9848 24.9842 43.741C25.3218 43.4409 25.6407 43.1408 25.9408 42.8407L26.2972 43.1783ZM23.7087 37.9264C23.5399 38.0201 23.3711 38.1889 23.1648 38.4328C22.9585 38.6766 22.7521 38.9767 22.527 39.3144C22.302 39.652 22.0956 40.0084 21.8706 40.4023C21.6455 40.7962 21.4391 41.2088 21.2141 41.6027C20.7264 42.5405 20.2387 43.5909 19.7135 44.7351C19.7885 44.9227 19.8636 45.054 19.9761 45.129C20.0887 45.204 20.1824 45.2603 20.2762 45.279C20.3888 45.3166 20.5013 45.3166 20.6138 45.279C20.989 45.1665 21.3266 44.9227 21.608 44.5288C21.8893 44.1349 22.1519 43.7035 22.377 43.2158C22.6021 42.7281 22.8084 42.2029 22.996 41.6777C23.1835 41.1338 23.3336 40.6649 23.4836 40.2522C23.6337 39.8396 23.7275 39.4832 23.765 39.1831C23.8025 38.883 23.8213 38.6579 23.8025 38.4703C23.8025 38.264 23.765 38.0764 23.7087 37.9264Z" fill="black"/>
                  <path class="svg--mplus__icon--sub04" d="M28.0791 40.8525C27.9103 41.2088 27.7227 41.584 27.5352 41.9591C27.3476 42.353 27.1788 42.7281 27.01 43.0845C26.8412 43.4597 26.7099 43.7973 26.5973 44.1349C26.4848 44.4538 26.4098 44.7539 26.3535 44.9977C26.316 45.2416 26.2972 45.4479 26.3535 45.5792C26.391 45.7292 26.5035 45.7855 26.6536 45.7855C26.7661 45.7855 26.8787 45.748 26.9912 45.6542C27.1225 45.5604 27.2538 45.4479 27.4039 45.3166C27.5539 45.1853 27.6852 45.0165 27.8353 44.8477C27.9853 44.6601 28.1166 44.4913 28.2667 44.3037C28.5856 43.8723 28.9044 43.4034 29.242 42.8594L29.4671 43.4409C29.0357 44.1349 28.6043 44.7351 28.1729 45.2416C27.9853 45.4479 27.7978 45.6542 27.6102 45.8418C27.4226 46.0293 27.2163 46.1794 27.01 46.2919C26.8037 46.4045 26.6161 46.4795 26.4285 46.4983C26.2409 46.517 26.0721 46.4795 25.9033 46.367C25.5657 46.1419 25.3406 45.8605 25.2281 45.5417C25.1155 45.2228 25.0593 44.9039 25.0593 44.5663C25.0593 44.2474 25.1155 43.9286 25.2093 43.6285C25.3031 43.3284 25.3781 43.1033 25.4532 42.9157C25.622 42.5031 25.8095 42.0717 26.0159 41.6027C26.2222 41.1526 26.4473 40.6836 26.6911 40.2335C26.935 39.7646 27.16 39.3144 27.4039 38.8642C27.6477 38.4141 27.8728 37.9827 28.1166 37.5888C28.6606 36.6322 29.2233 35.6943 29.786 34.7565C29.8235 34.7752 29.8798 34.7752 29.9361 34.794C29.9923 34.8127 30.0673 34.8127 30.1611 34.8315C30.2549 34.8503 30.3862 34.869 30.5175 34.9065C30.7051 34.9628 30.8551 35.0191 30.9489 35.0753C31.0615 35.1316 31.1365 35.1691 31.1928 35.2066C31.2678 35.2441 31.3053 35.3004 31.3241 35.3192C30.9114 35.9944 30.4988 36.6509 30.1049 37.2886C29.7672 37.8514 29.3921 38.4516 29.017 39.0893C28.6606 39.727 28.3417 40.3085 28.0791 40.8525Z" fill="black"/>
                  <path class="svg--mplus__icon--sub05" d="M34.2501 45.7293C34.3626 45.7105 34.4752 45.673 34.5877 45.5792C34.719 45.4854 34.8503 45.3729 35.0004 45.2416C35.1504 45.1103 35.2817 44.9415 35.4318 44.7727C35.5818 44.5851 35.7131 44.4163 35.8632 44.2287C36.182 43.7973 36.5009 43.3096 36.8385 42.7657L37.0636 43.3471C36.6322 44.0787 36.2008 44.6789 35.7694 45.1853C35.5818 45.4104 35.3943 45.598 35.2067 45.7855C35.0191 45.9731 34.8128 46.1232 34.6065 46.2357C34.4001 46.3482 34.2126 46.4233 34.025 46.4608C33.8374 46.4795 33.6499 46.442 33.4998 46.3295C33.1247 46.0856 32.8996 45.7668 32.7871 45.4104C32.6745 45.054 32.6558 44.6976 32.6745 44.3225C32.4869 44.5851 32.2619 44.8664 32.018 45.1666C31.7742 45.4667 31.5116 45.7293 31.249 45.9543C30.9864 46.1794 30.7238 46.3295 30.4612 46.4233C30.1986 46.517 29.9548 46.4795 29.7297 46.3295C29.3921 46.1044 29.167 45.823 29.0544 45.5042C28.9419 45.1853 28.8856 44.8477 28.8856 44.5288C28.8856 44.2099 28.9419 43.8911 29.0357 43.591C29.1295 43.2909 29.2045 43.047 29.2795 42.8595C29.6171 42.0154 29.936 41.2651 30.2549 40.6086C30.5737 39.9521 30.8551 39.3894 31.1177 38.9205C31.4178 38.3766 31.6992 37.9076 31.9617 37.495C31.9993 37.495 32.0743 37.495 32.1306 37.5137C32.1868 37.5325 32.2619 37.5513 32.3556 37.57C32.4494 37.5888 32.562 37.6263 32.6933 37.6638C32.8808 37.7201 33.0309 37.7763 33.1247 37.8139C33.2372 37.8514 33.3122 37.9076 33.3685 37.9264C33.4435 37.9639 33.4811 38.0202 33.4998 38.0389C33.3873 38.1702 33.256 38.3578 33.1059 38.6016C32.9746 38.808 32.787 39.0893 32.5807 39.4457C32.3744 39.8021 32.1306 40.2522 31.868 40.7774C31.6054 41.3026 31.3428 41.8653 31.0614 42.4468C30.7988 43.0283 30.5737 43.5722 30.4049 44.0599C30.2361 44.5476 30.1423 44.9602 30.1236 45.2603C30.1048 45.5792 30.2174 45.7293 30.4612 45.7105C30.5925 45.6917 30.7613 45.6167 30.9301 45.4854C31.1177 45.3354 31.2865 45.1666 31.4741 44.9415C31.6616 44.7351 31.8492 44.4913 32.018 44.2475C32.2056 44.0036 32.3744 43.7785 32.5245 43.5535C32.6745 43.3471 32.7871 43.1596 32.8808 43.0095C32.9746 42.8595 33.0309 42.7657 33.0309 42.7469C33.3685 41.9216 33.6874 41.1713 34.0062 40.5336C34.3251 39.8771 34.6065 39.3332 34.8503 38.8642C35.1504 38.3203 35.4318 37.8514 35.6756 37.4387C35.7131 37.4387 35.7694 37.4387 35.8257 37.4575C35.8819 37.4762 35.957 37.495 36.0507 37.5137C36.1445 37.5325 36.2758 37.57 36.4071 37.6075C36.5947 37.6638 36.7448 37.7201 36.8385 37.7576C36.9511 37.7951 37.0261 37.8514 37.0824 37.8701C37.1574 37.9076 37.1949 37.9639 37.2137 37.9827C37.1011 38.114 36.9511 38.3015 36.801 38.5454C36.6697 38.7517 36.5009 39.0331 36.2946 39.3894C36.0883 39.7458 35.8632 40.196 35.6006 40.7212C35.338 41.2464 35.0754 41.8091 34.794 42.3905C34.5314 42.972 34.3064 43.5159 34.1375 44.0036C33.9687 44.4913 33.8749 44.904 33.8562 45.2041C33.8937 45.5792 34.0062 45.7293 34.2501 45.7293Z" fill="black"/>
                  <path class="svg--mplus__icon--sub06" d="M40.3461 44.9602C40.665 44.7726 40.9838 44.5475 41.2839 44.3037C41.584 44.0599 41.8654 43.816 42.128 43.6097C42.4093 43.3659 42.6907 43.1033 42.9533 42.8407L43.1596 43.2346C43.0846 43.3284 42.9533 43.4784 42.7657 43.666C42.5969 43.8348 42.3531 44.0411 42.0154 44.3225C41.6966 44.6038 41.2464 44.9602 40.7025 45.3916C40.0647 45.8793 39.4833 46.1982 38.9956 46.3295C38.5079 46.4607 38.0765 46.4983 37.7201 46.442C37.3637 46.3857 37.0824 46.2544 36.8573 46.0856C36.6322 45.898 36.4822 45.748 36.3884 45.6354C36.2946 45.5229 36.1821 45.3916 36.0508 45.204C35.9195 45.0165 35.8257 44.8852 35.7694 44.7726L35.8257 44.7164C35.8444 44.6976 35.8632 44.6788 35.882 44.6601C35.9007 44.6413 35.9195 44.6226 35.9382 44.6038C36.0883 44.8664 36.2758 45.0727 36.5197 45.2228C36.7635 45.3916 37.0261 45.4854 37.2887 45.5041C37.5513 45.5417 37.8327 45.4854 38.0953 45.3728C38.3579 45.2603 38.6017 45.054 38.7893 44.7726C38.9768 44.4913 39.1269 44.1161 39.2207 43.6472C39.3145 43.1783 39.3332 42.5968 39.2582 41.9028C39.1644 41.0775 39.2207 40.3835 39.4458 39.8396C39.6521 39.2956 39.9334 38.8642 40.2523 38.5266C40.5712 38.2077 40.9275 37.9639 41.3027 37.8138C41.6778 37.6638 41.9779 37.57 42.203 37.5325C42.4281 37.495 42.6344 37.5325 42.7845 37.6075C42.9533 37.7013 43.0846 37.7951 43.1784 37.9264C43.3097 38.0577 43.4035 38.2452 43.4972 38.4516C42.6719 38.7704 42.053 39.0893 41.6591 39.4269C41.2652 39.7645 41.0026 40.1022 40.8713 40.4585C40.74 40.8149 40.6837 41.1901 40.74 41.5464C40.7775 41.9216 40.815 42.2967 40.8713 42.6719C40.9088 43.047 40.9088 43.4409 40.8713 43.816C40.815 44.2099 40.6462 44.5851 40.3461 44.9602Z" fill="black"/>
                </svg>`
                : ''
            }
            </div>
          </div>
          <div class="discountshelf__carousel__item__brand">${
            value.productBrand
          }</div>
          <div class="discountshelf__carousel__item__name">${
            value.productName
          }</div>
          <div class="discountshelf__carousel__item__stars">
            ${injectHTML.repeat(
              `
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="svg--star__ratings" d="M5.5 0.941162L7.12288 4.20747L10.7308 4.74157L8.12587 7.29436L8.73282 10.8908L5.5 9.20216L2.26718 10.8908L2.87413 7.29436L0.269189 4.74157L3.87713 4.20747L5.5 0.941162Z" fill="#FDC14D"/>
              </svg>
              `,
              5
            )}(1)
          </div>
          <div class="discountshelf__carousel__item__price__container">
            ${
              value.productSalePrice
                ? `<div class="discountshelf__carousel__item__saleprice">R$ ${value.productSalePrice}</div>`
                : ''
            }
            <div class="discountshelf__carousel__item__price">R$ ${
              value.productPrice
            }</div>
          </div>
          ${
            value.productHasStock
              ? `<button data-productname="${value.productName}" class="discountshelf__carousel__item__buy ID_discountshelfCarouselItemBuy">ADICIONAR</button>`
              : '<button class="discountshelf__carousel__item__buy no--stock--button">PRODUTO INDISPONÍVEL</button>'
          }
          <div class="discountshelf--carousel--item--overcontainer">
            <button data-productname="${
              value.productName
            }" data-productbrand="${
              value.productBrand
            }" class="discountshelf__carousel__item__spy ID_discountShelfItemSpy">ESPIAR</button>
          </div>
        </div>
      </div>
    `;
  });

  return result;
}