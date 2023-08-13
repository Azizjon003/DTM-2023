async function ishla(params) {
  const data = await fetch("https://mandat.uzbmb.uz/Home2023/AfterFilter", {
    method: "POST",
    body: JSON.stringify({
      name: "5018316",
      region: 0,
      __RequestVerificationToken:
        "CfDJ8B2eRvtN3BxLpcL7NU_ZAUso-TybOtq44XiZ33QHcn4sbixwhCPIggW1ex1GQnYs-6OWNjKTX5Hfpn-CappTTMJb-sUt9N5t5GZvkUS_RZaftDshqUL9LAP8gL7g1KYH3LpGIu6DNReGJ4AcWgKClmY",
    }),
    headers: {
      Host: "mandat.uzbmb.uz",
      Origin: "https://mandat.uzbmb.uz",
      Referer: "https://mandat.uzbmb.uz/Home2023/AfterFilter",
      Cookie:
        ".AspNetCore.Culture=c=uz|uic=uz;.AspNetCore.Antiforgery.bnDOLbEMdVI=CfDJ8B2eRvtN3BxLpcL7NU_ZAUulLRaY-ECrSpdow52ex3apAUXUB91w-CBiYSxzPN9esLvXoSdZPX95tcIQXiDnD2OXNTz8d5yOQbncO_Vrv1oJnvwtENcEV23XxyG4C9EgnxzuYvZhxLNyckbvSIGtnM0",
    },
  });

  console.log(await data.text());
}
ishla();
