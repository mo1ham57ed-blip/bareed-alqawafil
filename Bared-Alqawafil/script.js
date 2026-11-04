// عرض السنة الحالية
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// إرسال طلب الاستقدام عبر واتساب
const requestForm = document.getElementById("requestForm");

if (requestForm) {
    requestForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("customerName").value.trim();
        const phone = document.getElementById("customerPhone").value.trim();
        const service = document.getElementById("serviceType").value;
        const country = document.getElementById("country").value;
        const details = document.getElementById("requestDetails").value.trim();
        const consent = document.getElementById("privacyConsent").checked;

        if (!name || !phone || !service || !country || !consent) {
            alert("من فضلك أكمل البيانات المطلوبة.");
            return;
        }

        const message =
            "السلام عليكم، أرغب في الاستفسار عن خدمات بريد القوافل للاستقدام.\n\n" +
            "الاسم: " + name + "\n" +
            "رقم الجوال: " + phone + "\n" +
            "نوع الخدمة: " + service + "\n" +
            "الدولة المطلوبة: " + country + "\n" +
            "تفاصيل إضافية: " + (details || "لا يوجد");

        const whatsappURL =
            "https://wa.me/966553947015?text=" +
            encodeURIComponent(message);

        window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
}