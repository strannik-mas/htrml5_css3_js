﻿/// <reference path="../_namespace.js" />

(function () {

    var speakerBadgePage = Object.inherit({

        initialize: function (element) {
            this.canvas = element.querySelector("canvas");

            this.speakerId = this.canvas.getAttribute("data-speaker-id");
            this.speakerName = this.canvas.getAttribute("data-speaker-name");
            this.canvas.addEventListener("dragover", this.handleDragOver.bind(this));
            this.canvas.addEventListener("drop", this.handleDrop.bind(this));

            this.drawBadge();
        },

        handleDragOver: function (event) {
            event.stopPropagation();
            event.preventDefault();
            event.dataTransfer.dropEffect = 'copy'; // Makes the browser display a "copy" cursor.
        },

        handleDrop: function (event) {
            event.stopPropagation();
            event.preventDefault();

            var files = event.dataTransfer.files;
            if (files.length == 0) return;

            // More than one file could have been dropped, we'll just use the first.
            var file = files[0];
            if (this.isImageType(file.type)) {
                this.readFile(file)
                    .pipe(this.loadImage)
                    .done(this.drawBadge);
            } else {
                alert("Please drop an image file.");
            }
        },

        drawBadge: function (image) {
            // TODO: Get the canvas's (this.canvas) context and assign to this.context
            this.context = this.canvas.getContext("2d");

            // TODO: Draw the following by calling the helper methods of `this`
            //       background
            //       top text
            //       speaker name
            //       image (or placeholder if no image)
            //       bar code (passing this.speakerId)
            this.drawBackground();
            this.drawTopText();
            this.drawSpeakerName();
            if (image) {
                this.drawSpeakerImage(image);
            } else {
                this.drawImagePlaceholder();
            }
            this.drawBarCode(this.speakerId);
        },

        drawBackground: function () {
            // TODO: Fill the canvas with a white rectangle
            this.context.fillStyle = "white";
            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        },

        drawSpeakerImage: function (image) {
            // TODO: Draw the image on the canvas
            //       Draw only the center square of the image
            //       Draw at:
            //       x, y = 20, 20
            //       w, h = 160, 160
            var size = Math.min(image.width, image.height);
            var sourceX = image.width / 2 - size / 2;
            var sourceY = image.height / 2 - size / 2;
            this.context.drawImage(image, sourceX, sourceY, size, size, 20, 20, 160, 160);
        },

        drawImagePlaceholder: function () {
            this.context.strokeStyle = "2px #888";
            this.context.strokeRect(20, 20, 160, 160);
            this.context.font = "12px sans-serif";
            this.context.textBaseline = "middle";
            this.context.textAlign = "center";
            this.context.fillStyle = "black";
            this.context.fillText("Drag your profile photo here", 100, 100);
        },

        drawTopText: function () {
            this.context.font = "20px sans-serif";
            this.context.fillStyle = "black";
            this.context.textBaseline = "top";
            this.context.textAlign = "left";
            this.context.fillText("ContosoConf 2013 Speaker:", 200, 20);
        },

        drawSpeakerName: function () {
            // TODO: Draw this.speakerName on the canvas
            //       x, y = 200, 60
            //       font = 40px sans-serif
            //       fill style = black
            //       text baseline = top
            //       text align = left
            this.context.font = "40px sans-serif";
            this.context.fillStyle = "black";
            this.context.textBaseline = "top";
            this.context.textAlign = "left";
            this.context.fillText(this.speakerName, 200, 60);
        },

        drawBarCode: function (text) {
            text = "*" + text + "*"; // Wrap in "*" deliminators.
            var encodings = {
                "0": "bwbWBwBwb",
                "1": "BwbWbwbwB",
                "2": "bwBWbwbwB",
                "3": "BwBWbwbwb",
                "4": "bwbWBwbwB",
                "5": "BwbWBwbwb",
                "6": "bwBWBwbwb",
                "7": "bwbWbwBwB",
                "8": "BwbWbwBwb",
                "9": "bwBWbwBwb",
                "*": "bWbwBwBwb"
            };
            var x = 200, y = 140, height = 40, thick = 6, thin = 2;
            for (var charIndex = 0; charIndex < text.length; charIndex++) {
                var code = encodings[text[charIndex]];
                for (var stripeIndex = 0; stripeIndex < code.length; stripeIndex++) {
                    if (stripeIndex % 2 === 0) {
                        this.context.fillStyle = "black";
                    } else {
                        this.context.fillStyle = "white";
                    }
                    var isWideStripe = code.charCodeAt(stripeIndex) < 91;
                    if (isWideStripe) {
                        this.context.fillRect(x, y, thick, height);
                        x += thick;
                    } else {
                        this.context.fillRect(x, y, thin, height);
                        x += thin;
                    }
                }

                if (charIndex < text.length - 1) {
                    // Space between each
                    this.context.fillStyle = "white";
                    this.context.fillRect(x, y, thin, height);
                    x += thin;
                }
            }
        },

        isImageType: function (type) {
            var imageTypes = ["image/jpeg", "image/jpg", "image/png"];
            return imageTypes.indexOf(type) === 0;
        },

        readFile: function (file) {
            var reading = $.Deferred();
            var reader = new FileReader();
            var self = this;
            reader.onload = function (loadEvent) {
                var fileDataUrl = loadEvent.target.result;
                reading.resolveWith(self, [fileDataUrl]);
            };
            reader.readAsDataURL(file);
            return reading;
        },

        loadImage: function (imageUrl) {
            var loading = $.Deferred();
            var image = new Image();
            var self = this;
            image.onload = function () {
                loading.resolveWith(self, [image]);
            };
            image.src = imageUrl; // This starts the image loading
            return loading;
        }

    });

    var badgeElement = document.querySelector(".badge");
    speakerBadgePage.create(badgeElement);

}());
// SIG // Begin signature block
// SIG // MIIaZgYJKoZIhvcNAQcCoIIaVzCCGlMCAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFJ/NIS9ok98X
// SIG // UWFVh9jGIIeq3yjtoIIVNjCCBKkwggORoAMCAQICEzMA
// SIG // AACIWQ48UR/iamcAAQAAAIgwDQYJKoZIhvcNAQEFBQAw
// SIG // eTELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEjMCEGA1UEAxMaTWlj
// SIG // cm9zb2Z0IENvZGUgU2lnbmluZyBQQ0EwHhcNMTIwNzI2
// SIG // MjA1MDQxWhcNMTMxMDI2MjA1MDQxWjCBgzELMAkGA1UE
// SIG // BhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNV
// SIG // BAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBD
// SIG // b3Jwb3JhdGlvbjENMAsGA1UECxMETU9QUjEeMBwGA1UE
// SIG // AxMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMIIBIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs3R00II8h6ea
// SIG // 1I6yBEKAlyUu5EHOk2M2XxPytHiYgMYofsyKE+89N4w7
// SIG // CaDYFMVcXtipHX8BwbOYG1B37P7qfEXPf+EhDsWEyp8P
// SIG // a7MJOLd0xFcevvBIqHla3w6bHJqovMhStQxpj4TOcVV7
// SIG // /wkgv0B3NyEwdFuV33fLoOXBchIGPfLIVWyvwftqFifI
// SIG // 9bNh49nOGw8e9OTNTDRsPkcR5wIrXxR6BAf11z2L22d9
// SIG // Vz41622NAUCNGoeW4g93TIm6OJz7jgKR2yIP5dA2qbg3
// SIG // RdAq/JaNwWBxM6WIsfbCBDCHW8PXL7J5EdiLZWKiihFm
// SIG // XX5/BXpzih96heXNKBDRPQIDAQABo4IBHTCCARkwEwYD
// SIG // VR0lBAwwCgYIKwYBBQUHAwMwHQYDVR0OBBYEFCZbPltd
// SIG // ll/i93eIf15FU1ioLlu4MA4GA1UdDwEB/wQEAwIHgDAf
// SIG // BgNVHSMEGDAWgBTLEejK0rQWWAHJNy4zFha5TJoKHzBW
// SIG // BgNVHR8ETzBNMEugSaBHhkVodHRwOi8vY3JsLm1pY3Jv
// SIG // c29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9NaWNDb2RT
// SIG // aWdQQ0FfMDgtMzEtMjAxMC5jcmwwWgYIKwYBBQUHAQEE
// SIG // TjBMMEoGCCsGAQUFBzAChj5odHRwOi8vd3d3Lm1pY3Jv
// SIG // c29mdC5jb20vcGtpL2NlcnRzL01pY0NvZFNpZ1BDQV8w
// SIG // OC0zMS0yMDEwLmNydDANBgkqhkiG9w0BAQUFAAOCAQEA
// SIG // D95ASYiR0TE3o0Q4abJqK9SR+2iFrli7HgyPVvqZ18qX
// SIG // J0zohY55aSzkvZY/5XBml5UwZSmtxsqs9Q95qGe/afQP
// SIG // l+MKD7/ulnYpsiLQM8b/i0mtrrL9vyXq7ydQwOsZ+Bpk
// SIG // aqDhF1mv8c/sgaiJ6LHSFAbjam10UmTalpQqXGlrH+0F
// SIG // mRrc6GWqiBsVlRrTpFGW/VWV+GONnxQMsZ5/SgT/w2at
// SIG // Cq+upN5j+vDqw7Oy64fbxTittnPSeGTq7CFbazvWRCL0
// SIG // gVKlK0MpiwyhKnGCQsurG37Upaet9973RprOQznoKlPt
// SIG // z0Dkd4hCv0cW4KU2au+nGo06PTME9iUgIzCCBLowggOi
// SIG // oAMCAQICCmECjkIAAAAAAB8wDQYJKoZIhvcNAQEFBQAw
// SIG // dzELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEhMB8GA1UEAxMYTWlj
// SIG // cm9zb2Z0IFRpbWUtU3RhbXAgUENBMB4XDTEyMDEwOTIy
// SIG // MjU1OFoXDTEzMDQwOTIyMjU1OFowgbMxCzAJBgNVBAYT
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xDTALBgNVBAsTBE1PUFIxJzAlBgNVBAsT
// SIG // Hm5DaXBoZXIgRFNFIEVTTjpGNTI4LTM3NzctOEE3NjEl
// SIG // MCMGA1UEAxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgU2Vy
// SIG // dmljZTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC
// SIG // ggEBAJbsjkdNVMJclYDXTgs9v5dDw0vjYGcRLwFNDNjR
// SIG // Ri8QQN4LpFBSEogLQ3otP+5IbmbHkeYDym7sealqI5vN
// SIG // Yp7NaqQ/56ND/2JHobS6RPrfQMGFVH7ooKcsQyObUh8y
// SIG // NfT+mlafjWN3ezCeCjOFchvKSsjMJc3bXREux7CM8Y9D
// SIG // SEcFtXogC+Xz78G69LPYzTiP+yGqPQpthRfQyueGA8Az
// SIG // g7UlxMxanMTD2mIlTVMlFGGP+xvg7PdHxoBF5jVTIzZ3
// SIG // yrDdmCs5wHU1D92BTCE9djDFsrBlcylIJ9jC0rCER7t4
// SIG // utV0A97XSxn3U9542ob3YYgmM7RHxqBUiBUrLHUCAwEA
// SIG // AaOCAQkwggEFMB0GA1UdDgQWBBQv6EbIaNNuT7Ig0N6J
// SIG // TvFH7kjB8jAfBgNVHSMEGDAWgBQjNPjZUkZwCu1A+3b7
// SIG // syuwwzWzDzBUBgNVHR8ETTBLMEmgR6BFhkNodHRwOi8v
// SIG // Y3JsLm1pY3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0
// SIG // cy9NaWNyb3NvZnRUaW1lU3RhbXBQQ0EuY3JsMFgGCCsG
// SIG // AQUFBwEBBEwwSjBIBggrBgEFBQcwAoY8aHR0cDovL3d3
// SIG // dy5taWNyb3NvZnQuY29tL3BraS9jZXJ0cy9NaWNyb3Nv
// SIG // ZnRUaW1lU3RhbXBQQ0EuY3J0MBMGA1UdJQQMMAoGCCsG
// SIG // AQUFBwMIMA0GCSqGSIb3DQEBBQUAA4IBAQBz/30unc2N
// SIG // iCt8feNeFXHpaGLwCLZDVsRcSi1o2PlIEZHzEZyF7BLU
// SIG // VKB1qTihWX917sb1NNhUpOLQzHyXq5N1MJcHHQRTLDZ/
// SIG // f/FAHgybgOISCiA6McAHdWfg+jSc7Ij7VxzlWGIgkEUv
// SIG // XUWpyI6zfHJtECfFS9hvoqgSs201I2f6LNslLbldsR4F
// SIG // 50MoPpwFdnfxJd4FRxlt3kmFodpKSwhGITWodTZMt7MI
// SIG // qt+3K9m+Kmr93zUXzD8Mx90Gz06UJGMgCy4krl9DRBJ6
// SIG // XN0326RFs5E6Eld940fGZtPPnEZW9EwHseAMqtX21Tyi
// SIG // 4LXU+Bx+BFUQaxj0kc1Rp5VlMIIFvDCCA6SgAwIBAgIK
// SIG // YTMmGgAAAAAAMTANBgkqhkiG9w0BAQUFADBfMRMwEQYK
// SIG // CZImiZPyLGQBGRYDY29tMRkwFwYKCZImiZPyLGQBGRYJ
// SIG // bWljcm9zb2Z0MS0wKwYDVQQDEyRNaWNyb3NvZnQgUm9v
// SIG // dCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkwHhcNMTAwODMx
// SIG // MjIxOTMyWhcNMjAwODMxMjIyOTMyWjB5MQswCQYDVQQG
// SIG // EwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UE
// SIG // BxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENv
// SIG // cnBvcmF0aW9uMSMwIQYDVQQDExpNaWNyb3NvZnQgQ29k
// SIG // ZSBTaWduaW5nIFBDQTCCASIwDQYJKoZIhvcNAQEBBQAD
// SIG // ggEPADCCAQoCggEBALJyWVwZMGS/HZpgICBCmXZTbD4b
// SIG // 1m/My/Hqa/6XFhDg3zp0gxq3L6Ay7P/ewkJOI9VyANs1
// SIG // VwqJyq4gSfTwaKxNS42lvXlLcZtHB9r9Jd+ddYjPqnNE
// SIG // f9eB2/O98jakyVxF3K+tPeAoaJcap6Vyc1bxF5Tk/TWU
// SIG // cqDWdl8ed0WDhTgW0HNbBbpnUo2lsmkv2hkL/pJ0KeJ2
// SIG // L1TdFDBZ+NKNYv3LyV9GMVC5JxPkQDDPcikQKCLHN049
// SIG // oDI9kM2hOAaFXE5WgigqBTK3S9dPY+fSLWLxRT3nrAgA
// SIG // 9kahntFbjCZT6HqqSvJGzzc8OJ60d1ylF56NyxGPVjzB
// SIG // rAlfA9MCAwEAAaOCAV4wggFaMA8GA1UdEwEB/wQFMAMB
// SIG // Af8wHQYDVR0OBBYEFMsR6MrStBZYAck3LjMWFrlMmgof
// SIG // MAsGA1UdDwQEAwIBhjASBgkrBgEEAYI3FQEEBQIDAQAB
// SIG // MCMGCSsGAQQBgjcVAgQWBBT90TFO0yaKleGYYDuoMW+m
// SIG // PLzYLTAZBgkrBgEEAYI3FAIEDB4KAFMAdQBiAEMAQTAf
// SIG // BgNVHSMEGDAWgBQOrIJgQFYnl+UlE/wq4QpTlVnkpDBQ
// SIG // BgNVHR8ESTBHMEWgQ6BBhj9odHRwOi8vY3JsLm1pY3Jv
// SIG // c29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9taWNyb3Nv
// SIG // ZnRyb290Y2VydC5jcmwwVAYIKwYBBQUHAQEESDBGMEQG
// SIG // CCsGAQUFBzAChjhodHRwOi8vd3d3Lm1pY3Jvc29mdC5j
// SIG // b20vcGtpL2NlcnRzL01pY3Jvc29mdFJvb3RDZXJ0LmNy
// SIG // dDANBgkqhkiG9w0BAQUFAAOCAgEAWTk+fyZGr+tvQLEy
// SIG // tWrrDi9uqEn361917Uw7LddDrQv+y+ktMaMjzHxQmIAh
// SIG // Xaw9L0y6oqhWnONwu7i0+Hm1SXL3PupBf8rhDBdpy6Wc
// SIG // IC36C1DEVs0t40rSvHDnqA2iA6VW4LiKS1fylUKc8fPv
// SIG // 7uOGHzQ8uFaa8FMjhSqkghyT4pQHHfLiTviMocroE6WR
// SIG // Tsgb0o9ylSpxbZsa+BzwU9ZnzCL/XB3Nooy9J7J5Y1ZE
// SIG // olHN+emjWFbdmwJFRC9f9Nqu1IIybvyklRPk62nnqaIs
// SIG // vsgrEA5ljpnb9aL6EiYJZTiU8XofSrvR4Vbo0HiWGFzJ
// SIG // NRZf3ZMdSY4tvq00RBzuEBUaAF3dNVshzpjHCe6FDoxP
// SIG // bQ4TTj18KUicctHzbMrB7HCjV5JXfZSNoBtIA1r3z6Nn
// SIG // CnSlNu0tLxfI5nI3EvRvsTxngvlSso0zFmUeDordEN5k
// SIG // 9G/ORtTTF+l5xAS00/ss3x+KnqwK+xMnQK3k+eGpf0a7
// SIG // B2BHZWBATrBC7E7ts3Z52Ao0CW0cgDEf4g5U3eWh++VH
// SIG // EK1kmP9QFi58vwUheuKVQSdpw5OPlcmN2Jshrg1cnPCi
// SIG // roZogwxqLbt2awAdlq3yFnv2FoMkuYjPaqhHMS+a3ONx
// SIG // PdcAfmJH0c6IybgY+g5yjcGjPa8CQGr/aZuW4hCoELQ3
// SIG // UAjWwz0wggYHMIID76ADAgECAgphFmg0AAAAAAAcMA0G
// SIG // CSqGSIb3DQEBBQUAMF8xEzARBgoJkiaJk/IsZAEZFgNj
// SIG // b20xGTAXBgoJkiaJk/IsZAEZFgltaWNyb3NvZnQxLTAr
// SIG // BgNVBAMTJE1pY3Jvc29mdCBSb290IENlcnRpZmljYXRl
// SIG // IEF1dGhvcml0eTAeFw0wNzA0MDMxMjUzMDlaFw0yMTA0
// SIG // MDMxMzAzMDlaMHcxCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xITAf
// SIG // BgNVBAMTGE1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQTCC
// SIG // ASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAJ+h
// SIG // bLHf20iSKnxrLhnhveLjxZlRI1Ctzt0YTiQP7tGn0Uyt
// SIG // dDAgEesH1VSVFUmUG0KSrphcMCbaAGvoe73siQcP9w4E
// SIG // mPCJzB/LMySHnfL0Zxws/HvniB3q506jocEjU8qN+kXP
// SIG // CdBer9CwQgSi+aZsk2fXKNxGU7CG0OUoRi4nrIZPVVIM
// SIG // 5AMs+2qQkDBuh/NZMJ36ftaXs+ghl3740hPzCLdTbVK0
// SIG // RZCfSABKR2YRJylmqJfk0waBSqL5hKcRRxQJgp+E7VV4
// SIG // /gGaHVAIhQAQMEbtt94jRrvELVSfrx54QTF3zJvfO4OT
// SIG // oWECtR0Nsfz3m7IBziJLVP/5BcPCIAsCAwEAAaOCAasw
// SIG // ggGnMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFCM0
// SIG // +NlSRnAK7UD7dvuzK7DDNbMPMAsGA1UdDwQEAwIBhjAQ
// SIG // BgkrBgEEAYI3FQEEAwIBADCBmAYDVR0jBIGQMIGNgBQO
// SIG // rIJgQFYnl+UlE/wq4QpTlVnkpKFjpGEwXzETMBEGCgmS
// SIG // JomT8ixkARkWA2NvbTEZMBcGCgmSJomT8ixkARkWCW1p
// SIG // Y3Jvc29mdDEtMCsGA1UEAxMkTWljcm9zb2Z0IFJvb3Qg
// SIG // Q2VydGlmaWNhdGUgQXV0aG9yaXR5ghB5rRahSqClrUxz
// SIG // WPQHEy5lMFAGA1UdHwRJMEcwRaBDoEGGP2h0dHA6Ly9j
// SIG // cmwubWljcm9zb2Z0LmNvbS9wa2kvY3JsL3Byb2R1Y3Rz
// SIG // L21pY3Jvc29mdHJvb3RjZXJ0LmNybDBUBggrBgEFBQcB
// SIG // AQRIMEYwRAYIKwYBBQUHMAKGOGh0dHA6Ly93d3cubWlj
// SIG // cm9zb2Z0LmNvbS9wa2kvY2VydHMvTWljcm9zb2Z0Um9v
// SIG // dENlcnQuY3J0MBMGA1UdJQQMMAoGCCsGAQUFBwMIMA0G
// SIG // CSqGSIb3DQEBBQUAA4ICAQAQl4rDXANENt3ptK132855
// SIG // UU0BsS50cVttDBOrzr57j7gu1BKijG1iuFcCy04gE1CZ
// SIG // 3XpA4le7r1iaHOEdAYasu3jyi9DsOwHu4r6PCgXIjUji
// SIG // 8FMV3U+rkuTnjWrVgMHmlPIGL4UD6ZEqJCJw+/b85HiZ
// SIG // Lg33B+JwvBhOnY5rCnKVuKE5nGctxVEO6mJcPxaYiyA/
// SIG // 4gcaMvnMMUp2MT0rcgvI6nA9/4UKE9/CCmGO8Ne4F+tO
// SIG // i3/FNSteo7/rvH0LQnvUU3Ih7jDKu3hlXFsBFwoUDtLa
// SIG // FJj1PLlmWLMtL+f5hYbMUVbonXCUbKw5TNT2eb+qGHpi
// SIG // Ke+imyk0BncaYsk9Hm0fgvALxyy7z0Oz5fnsfbXjpKh0
// SIG // NbhOxXEjEiZ2CzxSjHFaRkMUvLOzsE1nyJ9C/4B5IYCe
// SIG // FTBm6EISXhrIniIh0EPpK+m79EjMLNTYMoBMJipIJF9a
// SIG // 6lbvpt6Znco6b72BJ3QGEe52Ib+bgsEnVLaxaj2JoXZh
// SIG // tG6hE6a/qkfwEm/9ijJssv7fUciMI8lmvZ0dhxJkAj0t
// SIG // r1mPuOQh5bWwymO0eFQF1EEuUKyUsKV4q7OglnUa2ZKH
// SIG // E3UiLzKoCG6gW4wlv6DvhMoh1useT8ma7kng9wFlb4kL
// SIG // fchpyOZu6qeXzjEp/w7FW1zYTRuh2Povnj8uVRZryROj
// SIG // /TGCBJwwggSYAgEBMIGQMHkxCzAJBgNVBAYTAlVTMRMw
// SIG // EQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRt
// SIG // b25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRp
// SIG // b24xIzAhBgNVBAMTGk1pY3Jvc29mdCBDb2RlIFNpZ25p
// SIG // bmcgUENBAhMzAAAAiFkOPFEf4mpnAAEAAACIMAkGBSsO
// SIG // AwIaBQCggb4wGQYJKoZIhvcNAQkDMQwGCisGAQQBgjcC
// SIG // AQQwHAYKKwYBBAGCNwIBCzEOMAwGCisGAQQBgjcCARUw
// SIG // IwYJKoZIhvcNAQkEMRYEFO7jtvvJFS5QTf2nAmeyOZYD
// SIG // RJjlMF4GCisGAQQBgjcCAQwxUDBOoCaAJABNAGkAYwBy
// SIG // AG8AcwBvAGYAdAAgAEwAZQBhAHIAbgBpAG4AZ6EkgCJo
// SIG // dHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vbGVhcm5pbmcg
// SIG // MA0GCSqGSIb3DQEBAQUABIIBAELCJsHFVwyyq2PL7RCn
// SIG // 8rygxdUA0IRn23dJswUVkg5gf83D6M8KxUpGSGKemz8S
// SIG // Xn+whguCNIEwQ76Hi9BPIdgoPSuLIHr14gYvXE4yx72F
// SIG // sXDAZnaQLnLojqLjo+V2jL1uWTC+KPaYlnkdmstGlMbQ
// SIG // JO3/F6MFDbVZ3HCXpEiOCI5IXuqcrCDclJdwfCNM3OaV
// SIG // RVbtD0RR3DDx6BoKe6yjV4DHEbQiq+DljAAi3xTuMExe
// SIG // c1J58C0lAfny0jAZeg05fBdVcchPx9pwt0BuI8dLAzEf
// SIG // QlyqEnwxQmCnXbuOQFW/mTdXQlkKDCg9PRvczJZ+dEfL
// SIG // ZgpbS8T56akEZpChggIfMIICGwYJKoZIhvcNAQkGMYIC
// SIG // DDCCAggCAQEwgYUwdzELMAkGA1UEBhMCVVMxEzARBgNV
// SIG // BAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQx
// SIG // HjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEh
// SIG // MB8GA1UEAxMYTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENB
// SIG // AgphAo5CAAAAAAAfMAkGBSsOAwIaBQCgXTAYBgkqhkiG
// SIG // 9w0BCQMxCwYJKoZIhvcNAQcBMBwGCSqGSIb3DQEJBTEP
// SIG // Fw0xMjA5MjYxOTM1MDZaMCMGCSqGSIb3DQEJBDEWBBT8
// SIG // NeB0nJgs3RuoJrc6NVLXu04JsDANBgkqhkiG9w0BAQUF
// SIG // AASCAQBALUk7ptlxvK536lasqzbrpmX5qD+pinjc8/Py
// SIG // 40pBKDuMbexGC0MZ44WfbPG7wqvq0IT200cEXu59gr5i
// SIG // 8yokGaAwEbm2mP8aO1cT4CqMBrE9rWYdsWZMuExp4UnW
// SIG // 05NbyUpYNi2021VHZ9aBvGfi2WN5a924EFwGKty3Y8/S
// SIG // WGuVVF4dimcpiKb+PSkLaFuV7nJWvq4yAZlxwOJJA7Ps
// SIG // +Qnd2lieZx7XM31G7FV10TZsrJ3UePEVFXLV2hlapSy7
// SIG // COVEoFV/dC7zoOIru2o5LFUUorNYa5Ihi44eWR6B8OL3
// SIG // PJO6duFWE9uGOcl2/QP/Uf3DUEso4IWNri1TWsus
// SIG // End signature block
