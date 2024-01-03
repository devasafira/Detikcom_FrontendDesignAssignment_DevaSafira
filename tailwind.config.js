/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens:{
      'desktop': '1300px',
    },
    extend: {
      colors: {
        'primaryDark': '#212427',
        'grayish': 'rgba(255, 255, 255, 0.50)',
        
      },
      flex: {
        '0': '1 0 0',
      },
      backgroundImage:{
        '1': 'url(https://s3-alpha-sig.figma.com/img/4f32/ba21/29275d03aa95f85b18341a757130ee45?Expires=1704672000&Signature=CTUWdiX3wE8s~AnReRNow0vluy7JCS8WFGxme~icDPeTjTRO47VdD6brmtgH4YC6utSdR2icmAiRvXx~EB6YxDikpkxCNbY5kIAdFFzWinA0K-UeyHquKewwAFnFqQRV7KDLQ2F-ALu~JCIKpjFBgCSI1ny-OXvfBkJJCV82QtZIbzZP7u62xv~a9TuMsVQCMQb6S6BUFJccNvYPdpistWVd6f9UOMpERdzkxxDp6TA9OmsuuTp7BlWu3gkHUQd0NNmZdHJSaPljDTxS-zZtt-5AVZXuI0TEVlFQvu3YjLyPkkjSZ-mMC-lQF-jAWd7CQdoSnd2GbT7jxkNEQ-AKQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        '2': 'url(https://s3-alpha-sig.figma.com/img/9bdc/cf6f/db8bb11954f713f1530afc1439f20e41?Expires=1704672000&Signature=oWqKeVGF8WX4tckTBMfv5TL3WSkFOW1mP7T95r2rQmoxhv1oQjkx5oC1euFx5zFntMifTJ3k1SFUVZSexQ1Sx1P~VGbPcYxliNT0ruFg7~0OJLJTYmMJFCZX1d-69tmGoAurK5QvxSwHH9C8lVk-rfO-1sjJRPoUT1a4yX84t55I18vwkXMYqInLSSLWX3agW9nInFnsMEx31Kc4damqiNhEVrjpbfB7-lNLimrLe9tsoLn2i3o4hNOwSOf-90TCUq0gcGh0D578FSYA-E5bipgQmk-CMw4RYKJacrNdACC7-7y3~QumOXcYJcvZ~WCONVmkDrTO29NoyqPAZ-z20A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        '3': 'url(https://s3-alpha-sig.figma.com/img/8ce2/1876/80c7707b140706f861ef7f831b632b56?Expires=1704672000&Signature=cv302OsZqf09uZMOJ~js9bpr6Kih53XlrbuOBWtas5t4NSw8BaWRh89pSeqjTgNP8PjLcvOvE4z6TA2YoiXsvsEQ39ehc32~-4mP5jplvq3Bg1BDGejwQSZRKdn1onGnN9k2G9SENJ0ZgqzxxRT36cTXr-mGdaKxeTtH04t~zCRanaIZWSd7c1VV6SFc2S-Ngd6xaIo6UESKh1Kr6bNaunv-yL2N7gddDW1h2THw8hCANoD49OcEpllI7FyLzsTw5VWrEI2Cotlmv5ag8e0J-czZ4moOd01V93uAbHRbKNa2ClaESKg3PFgvHUuGNSQVf2I3VBoMtDZy3W31Gp0DZQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        '4': 'url(https://s3-alpha-sig.figma.com/img/14e2/1daf/ad23464caced1fa6d617615da91cc26b?Expires=1704672000&Signature=qYivFzCgd4mh6AuWzvgk4pfzKVA0kPXgA49nwj9a7GvBCJ95Sw1BC2JV2mqV2I4E39R~hse~HsoAGfvMALynaMrf6rNXGTWlfnO-xQ1JqLZu5OK7ceDXnwS5jIVaNcsoM8Z8IpGCO~TzHP0woDb0v~lOs0GiL7rtwHErzRuKrxUM1FFhOqb1icOTWY7L7LvMs6qtGEZGflcpYoW0bqwPr9FOLwuPxK76v7In04rLjaWGFcwPxSfwF79EsXCCAsWHEO4uIPgdVubwV6NdoUIgyi7XV8bUvhVckvUZk9ubAGt1LuGr46bcd8I3nCVCrxz8U5jMab81ZOlUuGPf4MHCKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        '5': 'url(https://s3-alpha-sig.figma.com/img/602c/5c1b/837364aa1936021f99d5fe0055affb36?Expires=1704672000&Signature=FMu~axO6~QNrVHCg~Ei5EL-mBvLSO1lPzKXH236PjiGzQOlHQFA9OJGUKw53mjaud4JlpvrtNgdKVqjKWxQqO5iaNDFSNFzO9GdCeAZXJubgNdW4bm3Lq9HX5dAoTSaB5lq7OTOaLUFGKyhNse86uFiMH~k1o9WC9Cb2sGwa1IJ2MGtdn54GaNB~FvxJlj5h~t2zrs-7d8uPnma7FppbgYsF1pYkM954Jp6GuYREQ2XX941dVmfz505vtTy2h1bFXx~rZA10p8~75UzN0pyLd~qQQs2awxMWVEH8w-q5dZ2nyQg9SqkkpKN0JSLSmIpNCM8wHJ65QySTIsZeV8gfUg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        '6': 'url(https://s3-alpha-sig.figma.com/img/81d9/0de8/1b37f2e2dc7e8aa1418e355888d6cce0?Expires=1704672000&Signature=CsWOVj4lx4928G7a1Bkygol9CwM2ZNaPqbmsmHKe~Qo30s6HhPESlNKd5m1X6ChJnqjwjqzUEYEOkKVHNThWLyS~ipT~fkcG9UJhDctBkSQ8Qbj8i5NaIFY0sGeybYQb22B2e4S~H1SdkGzx3ZoiIAWmAQqvJ4zy1MfWeCotIu8WgHTGCNXnXlelWUhtFDC53tA1sTUM5O-4Dw8UOFlELA2Dmz3lg1kEFav3axeXKfWAzHWyDPYESLL27sRtZ9AbuliFl9Ol27H0Idn9uyUUK4~YoQr0kysh-NprWZP8TM82I6xrleGMVQa9PwIree8uQ~aSRvH6ztvvZYt50x1Wsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        '7': 'url(https://s3-alpha-sig.figma.com/img/e563/b51a/6dedf78e2c96b74079a79b07baa7e74d?Expires=1704672000&Signature=bL3jLngJMoEiCOo-oG4cuevK-UVbYP5oVh8Xe5Ca~U2mky1ymaJYtgprHYc-Ra34xMx98PPfAofQvXa6~jxJseZyaIfL6TkNLVzUi2x2TjpOFYf4WVv1pPBhMbePpQNcDQ1IDzcB4dLgxbNipIcC1E7G8dzMUiP-4qw5KAQineolO1SK4EjZBeQoe50Cv35ZqvrK4iuh5mcZdbqgkMz9XycsrJK0W3fBRQtsvlnlosuZvmesoLEI-uQggddnLui~VtMQipapNYs33f0VHQcTae3~mFzlzF5o7Q-AUaSVacXdr995L1aavPqHn4HAUDiyks3wrVfbLtSwz~s2yVG8LQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        '8': 'url(https://s3-alpha-sig.figma.com/img/8ff3/d97c/509e86001979aa2ff3e0df4f9cfe7a31?Expires=1704672000&Signature=OeV7rCSQIBKCkl~4BJZUoxVH7cD73azjqwAyZobVwrY-Zynfz9zXFmzHdLa4rNWbuj2dUSt43UisLNASBnXg9-uTWG11nbYFYySO0STizdUuTdvAnTRT6iLv~QKSqQavuf7bfCT-YyglJuSgexGMndopHiV1ZPh86u8zaIe-88dodEFwFKRw7xTFdG~c4gQa~RVi0nZXTUcR-ZFjwKchoMsxkf2p8Yj4CCIsZu0m9PmDBA7S~pstLBLBjIAsyhQcyabBLQwwpYxrnzbGEwu2~NgBOx-IyGN6rlR4M2JixnrVpLF4121D37bPQ4J4x3Acl35oM~uwnopsSo5aHBjCbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        'slider-1': 'url(https://s3-alpha-sig.figma.com/img/18f0/7fa2/c6fa6f98051d31ca65692f6d142a7342?Expires=1704672000&Signature=I7SzqAkn6zTiMBrxjUKMi9hZxVphSeSSaRpAh7r8WaJEDec8tNJYqmFUG296xc3I2PD7GpBgmJvy1NWbU1elcoILRzf3SEnVEB9XkJciMNDrcLpBqSwpm4coqw0whbM9G45Dxn5o-AH3DRgtAonLPVE1mlwVI6D9avb09I10X-jkSu6GS4q4OWOvtZxkMvyoId2zluE~coiCiow~cyjw2swiuaKkrGbm4haCrmjmeoUhj61BpuONIHVMFi9iYovrbEFwDqLAiuCxoQUZ82tS0BTDyLtrFdOT8FHMs4SKFjn~wyVMmSLc7dpqdiYCzAQzjquO1nZ1A~1gjYceez-ptw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        'slider-2': 'url(https://s3-alpha-sig.figma.com/img/4f42/6cd5/d9994df19dde650523857ec927765fbb?Expires=1704672000&Signature=MR6zJgAP2FkhwBU8L8PHShL2PWm80CacZigmbbwPSs83NxrVeP-ZbL3hshQ5WPXm0sREYl-myPs52uzqbXK5951cWCmY1vmrJC3prclMthlp~LPQz38dPmIQP7X68lmhsgg63d9-JOIdTqoXyo9Tmv3sKbhxprCJz2Hc~d0oAUwesuQUa20359aqui~6H5WOqTpGCQvhMRh2165yVgDuNPaP3Ws7n9dTbCroQIc7BA8vXVYILTNGf1e0OpEZTy8Rq9yF2hE608MmcGNZw~-qXeXacmq~MCsYokvNQXCzXfYM8H5X7nTzt5a3o5JQNefX9rG8MZn4Ldo3WXK3y7rKfQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        'slider-3': 'url(https://s3-alpha-sig.figma.com/img/c787/9865/db521a14c80245fadb02ff7448cc3335?Expires=1704672000&Signature=ApKea2861xXw8LvgwG1yVHwTVqlPNZRyHH80S5zAykRSYrlKtv4h-aEJC3-mXbTotZU8AwMZWGUTw9YDFyJ8YrdjupCaQ8iTK8l3f672E~KYfXxNAJCKdZ7cMqqGAVXJoXN7akMce8AycgNiy5mBH6jUdYPb100l7xLcm2WTVUbAHqOqbY3mL4muhzmdBqhxPDsozt1VHOmdR4owyzLhNrv2qKkN3iQUeNTGFgkErOHdD1oVSn83jPhtxYElLSmglIsI7LDjwayQAwGQBdydLsgM1NgRvGahuNEWmKpANBokuX19nfEkcVwN2H-YPDxLS-NCMmSlzcQ9zo-yyk1~jA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        'slider-4': 'url(https://s3-alpha-sig.figma.com/img/77e7/ed29/dfc7a171fb13c778e5fdd222fb1470cc?Expires=1704672000&Signature=PwdXJM8SwzH3DK71W8six9mPi6kbGW1HO3Tgl-gNNZiQvLgmn592vhjQQnAKzm~3aCbr0k4kPxrWJfu8Cr5z0MoBNAvMA99Jf3coi7jTPgfWRAlFYqinFd7yYvvucHfWbPFLqxb467susvhPYNFkExFvZZjeBfarAj53pgvHzMtOt0MvS1XJvmN2dLU2K5a1PI3j0Y9gEo1dq1oL4b683KOm0YOeOcguHxcdG7Zk9jTL74waVnfEAI~cEjpugwfhOwCfJftOMce8ECZJApV3IC13otC~nKFG24jTCiublULJ8g9MEMd0rR~XPduWl1AB8A3mU-5UTYS-oUdLkfZRtg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        'footerBg':'url(https://s3-alpha-sig.figma.com/img/e0ef/3a67/0f69b623c6f082d2fb31dc1f48ffd2d1?Expires=1705276800&Signature=YcddLi3AsQrmfSeDAiesZm9ngzT5pCVrsal97UfizfZJ3QseZdUew5MTu~Rbmz4PFRUpjV96UsqZvmTTfBBBsgbSjd7-P9fqg03qphda-r6HWFJeEUVmBj1akHL-txx-yQpVbFu-Gxr~NJ1jVEocssy~V~RtH2oHnzLDsUrELcBW0uMLeMyElkDkaLcdoCqnD8gGw0V0mrD0UEUIexNrDVOv03V8vUIEgzpL-c-i6izmyxgLTWp5p8byDTBoAdPQJs20nhq9qqntcRLVBHzh1BEoBJbMkTsTJLXru9vpHZ8dnTxpLSnsYYb9MQXFgilKhFffsytm4Pi0wmlZPW-nog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        'content1':'url(https://s3-alpha-sig.figma.com/img/28fa/8c20/7a66c12b01bde431f1ddefca6c2fcb14?Expires=1705276800&Signature=fsh3DvLxNxx0k1Z1uWxQ68i9uvVgE3UXy3di-ZM8hN73sKQXo86Q0iDCKkn1dfTtD1c2dt-YPQZ7QBcA1AYn82InBhl6sU2OAIc0e-ufpKStrKcMgt78pWThuTxzGfW33lder~nO-KMegU48A3UOM-ebWY4ycYA67SDZIlwxjOlScoYUC~b3byNJ0H3u9S5V-nkpdCaa~6cmHvcTH9ewujxQm4i7fyMUEswM401eV7WMNJkg1lMSgCMSqXJuS1gaJm9g4KoKSdYGzpmfTc1GemY2qcZGgMbHDJ9NAYO~JgbAfC8M6J4ShZdBkccYb8ing3KubkMoLyt7E3SgeCa8EQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        'content2': 'url(https://s3-alpha-sig.figma.com/img/47e5/b4c6/b5abf81598ac4f92a40a299fc03f8a78?Expires=1705276800&Signature=T5c-nkJ3XfOnSPLlubO9Ytx7V~PDIgHV6xhwwfNLzfoq6h5vX6mUQpQ7JUzQKXa-4rFGTPXOMHIHHiYmAlzOPKLX0lIMZmHT4SbX18ug3pSgol9uTJMXkS2k2SbtQJO7EItBeDWPtMPHOBEhIQHeyQForBAgYJ6UCUoAKR-j1cyQt~VDp4wQtR3t0KpvbYcGbPBSJDkuTmRtXiZ8G8UQz-NrWFkhWpbwDUN7qA9sbSKufnPvTEQXxSzMQ1WTgtQ~MoW4raZQAWo3ebQgx9A7G3BerqFvTuyzV3uYKkkOIYkZIiW1ShtcODIFXl3NjgDFLZVabd6rZMgtevUdwGyPXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        'content3':'url(https://s3-alpha-sig.figma.com/img/9344/23cc/4b6b5098c051551d57341269fe1cebce?Expires=1705276800&Signature=BR~LQb2WgAd655hnNgeJN77U~2ee7ohaX6SM0OrfdrL~zzQ4mlokASLUHSg-0R1yMB8bbFVxM4Whpm0ZnBBZGWcRmMSnDkGmhzhpgw769BXVMuFGNAuE9atL-H6-ufWMJr8xyY4vm7iMyHysWYmBfwa5kulwzDJ7v1YKfiqJ~kFBV3y7oNcZkSHYkd5kLJNZD9p5nvH2oKiXeaXMPSsP3sI~cRQ1k5F~TIvmNRNWlFGePdE2xocCt-pEKHTraW-xfyAfDlcX0oaw5NitTIGAP4BxmrcIIENx~V~kB8NzAuXCwM2KxxbEqGKrN5ahZSuQgJ0fygg5GjyKy~v1yuCXFw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        'content4': 'url(https://s3-alpha-sig.figma.com/img/0755/123a/6308b48f919617cd2f9ba916ea0bba45?Expires=1705276800&Signature=Udiy0PRQdDBVY2KvaZaxy8CmkDcwNjJyVn3rFaqF~OFIcOP-ZSORuslaSNji5tM-~ANV-uGSyd8OzsaVXKvLF5pxrd0k5lvbOaNS93Xvv8Zj9Y0SlrYx9Un1D7Ovw0KEsWksLaIh9n5JRpy5UqqhMv5wyNll6btSIDQ4JZAMMNdhEH~~RwCkrvSiLC7gbTLjiWBZ9DUspgX0zChnMV6siT2-Le1WRiA4baOz2mKnXqoUfiyHy4DwDbax2X9z4jO8F77MRTzVELWdTfaai6lVpFDofo7y0dxSYfoT6-ly5EwVs7~oY7jnF2dMuVwmLbUEzE-QNo~YQ78sx87hUIjNng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        'content5': 'url(https://s3-alpha-sig.figma.com/img/e713/ab81/d4c8612b71172f14c3497ae7b8f2eedc?Expires=1705276800&Signature=KOzcnxPQTJCRNZvdSnUeIy2EzlGIW2GH7WPHURyexuencewZ6QSoV1dWcyjrdJHcXcYkTmPPCHhgDKyGLgiITzAqjhB~QC02cmUvRQ217~0xciYYwiv3t5~jWSepbgC2SlYj8k-qgKDWo80mWvgDw0HuOOpaDCC20q~5HIrRljTijtnZw6fzzHzlJb9EcQkvS2VPfPmFUiRnSwuXktmJkJ-sGfajrnWjlEo6wZ4z9bPRDnJ7HiEkV99Ut9ahsiyFxAv-Hq-228UmBtHzJ8gjIg0ol474IW2zEeFCR-n2NtIyuFPEAo~K5Uy8RFXf4-bHptdtq-IbnTveopc~u~-B4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        'content6':'url(https://s3-alpha-sig.figma.com/img/3f86/9fd3/d9b4e4153bfbed76c579c5e3cfd0c22f?Expires=1705276800&Signature=Rx3DAXCovDMELCChvYK58dGBZNyopUBI0Z9HYVRGfK3U3xNyvFa3X8jI733CSsQqno8kRahiyTWx2j57IaMoDSy3r82U5-BfQtqZXkLlRfE0A~QW0~EDjL5CrBpc4A4OwqDPm62fwpLQEr0zbKKxTWU7HtA4xefDZyThv3pKBlgnIrbyxqo9SvNcZprWwE5Xp2azwZ~duEXT4Hp-YbZNebzu-NCyPQTgzwEPUzaqOTDKSzMtQ3yShsuLqIGnumTz1kU0VG-byMlCFpMnZmldf4RHvgJvjusAA8bkLElESF2IOV-E38J4SwLFwEDp1HVszuB8adlJqS5EFoAVHgeXYQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
        'gradientBlue': 'linear-gradient(237deg, #59FFB9 -30.09%, #326CFF 71.21%)',
        'gradientGreen': 'linear-gradient(57deg, #59FFB9 -30.09%, #326CFF 71.21%)',

      },
      animation: {
        'marquee': 'move-rtl 9000ms linear infinite'
      },
      boxShadow: {
        'yellow': '0px 18px 40px 12px rgba(255, 211, 103, 0.35)',
        'orange': ''
      }
    },
  },
  plugins: [],
}