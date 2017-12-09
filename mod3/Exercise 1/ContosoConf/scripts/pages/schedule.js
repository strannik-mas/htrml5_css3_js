var schedule = [
    {
        "id": "session-1",
        "title": "Registration",
        "tracks": [1, 2]
    },
    {
        "id": "session-2",
        "title": "Moving the Web forward with HTML5",
        "tracks": [1, 2]
    },
    {
        "id": "session-3",
        "title": "Diving in at the deep end with Canvas",
        "tracks": [1]
    },
    {
        "id": "session-4",
        "title": "New Technologies in Enterprise",
        "tracks": [2]
    },
    {
        "id": "session-5",
        "title": "WebSockets and You",
        "tracks": [1]
    },
    {
        "id": "session-6",
        "title": "Coffee and Cake Break",
        "tracks": [1, 2]
    },
    {
        "id": "session-7",
        "title": "Building Responsive UIs",
        "tracks": [1]
    },
    {
        "id": "session-8",
        "title": "Fun with Forms (no, really!)",
        "tracks": [2]
    },
    {
        "id": "session-9",
        "title": "A Fresh Look at Layouts",
        "tracks": [1]
    },
    {
        "id": "session-10",
        "title": "Real-world Applications of HTML5 APIs",
        "tracks": [2]
    },
    {
        "id": "session-11",
        "title": "Lunch",
        "tracks": [1, 2]
    },
    {
        "id": "session-12",
        "title": "Getting to Grips with JavaScript",
        "tracks": [1]
    },
    {
        "id": "session-13",
        "title": "Transforms and Animations",
        "tracks": [2]
    },
    {
        "id": "session-14",
        "title": "Web Design Adventures with CSS3",
        "tracks": [1]
    },
    {
        "id": "session-15",
        "title": "Introducing Data Access and Caching",
        "tracks": [2]
    },
    {
        "id": "session-16",
        "title": "Closing Thanks and Prizes",
        "tracks": [1, 2]
    }
];


// TODO: Task 2 - Get the "schedule" list element from the document
var list = document.getElementById("schedule");

function createSessionElement(session) {
    // TODO: Task 3 - Create a <li> element for the session.
    //       Add the session title as the <li> text content
    //       Return the <li> element
   

        var li = document.createElement("li");
        liText = document.createTextNode(session.title);
        li.appendChild(liText);
        return li;

};

function clearList() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function displaySchedule() {
    clearList();
    
    // TODO: Task 4 - Loop through the schedule array
    //       Create session elements
    //       Append the elements to the list   
    for (var i = 0; i < schedule.length; i++) {
        var li = createSessionElement(schedule[i]);
        list.appendChild(li);
    }

}

displaySchedule();
// SIG // Begin signature block
// SIG // MIIaeAYJKoZIhvcNAQcCoIIaaTCCGmUCAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFBwI1Tpqf6h3
// SIG // 33yZ3Lo4Tcr+DaYxoIIVPzCCBKkwggORoAMCAQICEzMA
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
// SIG // z0Dkd4hCv0cW4KU2au+nGo06PTME9iUgIzCCBMMwggOr
// SIG // oAMCAQICEzMAAAArOTJIwbLJSPMAAAAAACswDQYJKoZI
// SIG // hvcNAQEFBQAwdzELMAkGA1UEBhMCVVMxEzARBgNVBAgT
// SIG // Cldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAc
// SIG // BgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEhMB8G
// SIG // A1UEAxMYTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBMB4X
// SIG // DTEyMDkwNDIxMTIzNFoXDTEzMTIwNDIxMTIzNFowgbMx
// SIG // CzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9u
// SIG // MRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNy
// SIG // b3NvZnQgQ29ycG9yYXRpb24xDTALBgNVBAsTBE1PUFIx
// SIG // JzAlBgNVBAsTHm5DaXBoZXIgRFNFIEVTTjpDMEY0LTMw
// SIG // ODYtREVGODElMCMGA1UEAxMcTWljcm9zb2Z0IFRpbWUt
// SIG // U3RhbXAgU2VydmljZTCCASIwDQYJKoZIhvcNAQEBBQAD
// SIG // ggEPADCCAQoCggEBAKa2MA4DZa5QWoZrhZ9IoR7JwO5e
// SIG // SQeF4HCWfL65X2JfBibTizm7GCKlLpKt2EuIOhqvm4Ou
// SIG // yF45jMIyexZ47Tc4OvFi+2iCAmjs67tAirH+oSw2YmBw
// SIG // OWBiDvvGGDhvsJLWQA2Apg14izZrhoomFxj/sOtNursp
// SIG // E+ZcSI5wRjYm/jQ1qzTh99rYXOqZfTG3TR9X63zWlQ1m
// SIG // DB4OMhc+LNWAoc7r95iRAtzBX/04gPg5f11kyjdcO1Fb
// SIG // XYVfzh4c+zS+X+UoVXBUnLjsfABVRlsomChWTOHxugkZ
// SIG // loFIKjDI9zMgbOdpw7PUw07PMB431JhS1KkjRbKuXEFJ
// SIG // T7RiaJMCAwEAAaOCAQkwggEFMB0GA1UdDgQWBBSlGDNT
// SIG // P5VgoUMW747Gr9Irup5Y0DAfBgNVHSMEGDAWgBQjNPjZ
// SIG // UkZwCu1A+3b7syuwwzWzDzBUBgNVHR8ETTBLMEmgR6BF
// SIG // hkNodHRwOi8vY3JsLm1pY3Jvc29mdC5jb20vcGtpL2Ny
// SIG // bC9wcm9kdWN0cy9NaWNyb3NvZnRUaW1lU3RhbXBQQ0Eu
// SIG // Y3JsMFgGCCsGAQUFBwEBBEwwSjBIBggrBgEFBQcwAoY8
// SIG // aHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3BraS9jZXJ0
// SIG // cy9NaWNyb3NvZnRUaW1lU3RhbXBQQ0EuY3J0MBMGA1Ud
// SIG // JQQMMAoGCCsGAQUFBwMIMA0GCSqGSIb3DQEBBQUAA4IB
// SIG // AQB+zLB75S++51a1z3PbqlLRFjnGtM361/4eZbXnSPOb
// SIG // RogFZmomhl7+h1jcxmOOOID0CEZ8K3OxDr9BqsvHqpSk
// SIG // N/BkOeHF1fnOB86r5CXwaa7URuL+ZjI815fFMiH67hol
// SIG // oF4MQiwRMzqCg/3tHbO+zpGkkSVxuatysJ6v5M8AYolw
// SIG // qbhKUIzuLyJkpajmTWuVLBx57KejMdqQYJCkbv6TAg0/
// SIG // LCQNxmomgVGDShC7dWNEqmkIxgPr4s8L7VY67O9ypwoM
// SIG // 9ADTIrivInKz58ScCyiggMrj4dc5ZjDnRhcY5/qC+lkL
// SIG // eryoDf4c/wOLY7JNEgIjTy2zhYQ74qFH6M8VMIIFvDCC
// SIG // A6SgAwIBAgIKYTMmGgAAAAAAMTANBgkqhkiG9w0BAQUF
// SIG // ADBfMRMwEQYKCZImiZPyLGQBGRYDY29tMRkwFwYKCZIm
// SIG // iZPyLGQBGRYJbWljcm9zb2Z0MS0wKwYDVQQDEyRNaWNy
// SIG // b3NvZnQgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkw
// SIG // HhcNMTAwODMxMjIxOTMyWhcNMjAwODMxMjIyOTMyWjB5
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMSMwIQYDVQQDExpNaWNy
// SIG // b3NvZnQgQ29kZSBTaWduaW5nIFBDQTCCASIwDQYJKoZI
// SIG // hvcNAQEBBQADggEPADCCAQoCggEBALJyWVwZMGS/HZpg
// SIG // ICBCmXZTbD4b1m/My/Hqa/6XFhDg3zp0gxq3L6Ay7P/e
// SIG // wkJOI9VyANs1VwqJyq4gSfTwaKxNS42lvXlLcZtHB9r9
// SIG // Jd+ddYjPqnNEf9eB2/O98jakyVxF3K+tPeAoaJcap6Vy
// SIG // c1bxF5Tk/TWUcqDWdl8ed0WDhTgW0HNbBbpnUo2lsmkv
// SIG // 2hkL/pJ0KeJ2L1TdFDBZ+NKNYv3LyV9GMVC5JxPkQDDP
// SIG // cikQKCLHN049oDI9kM2hOAaFXE5WgigqBTK3S9dPY+fS
// SIG // LWLxRT3nrAgA9kahntFbjCZT6HqqSvJGzzc8OJ60d1yl
// SIG // F56NyxGPVjzBrAlfA9MCAwEAAaOCAV4wggFaMA8GA1Ud
// SIG // EwEB/wQFMAMBAf8wHQYDVR0OBBYEFMsR6MrStBZYAck3
// SIG // LjMWFrlMmgofMAsGA1UdDwQEAwIBhjASBgkrBgEEAYI3
// SIG // FQEEBQIDAQABMCMGCSsGAQQBgjcVAgQWBBT90TFO0yaK
// SIG // leGYYDuoMW+mPLzYLTAZBgkrBgEEAYI3FAIEDB4KAFMA
// SIG // dQBiAEMAQTAfBgNVHSMEGDAWgBQOrIJgQFYnl+UlE/wq
// SIG // 4QpTlVnkpDBQBgNVHR8ESTBHMEWgQ6BBhj9odHRwOi8v
// SIG // Y3JsLm1pY3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0
// SIG // cy9taWNyb3NvZnRyb290Y2VydC5jcmwwVAYIKwYBBQUH
// SIG // AQEESDBGMEQGCCsGAQUFBzAChjhodHRwOi8vd3d3Lm1p
// SIG // Y3Jvc29mdC5jb20vcGtpL2NlcnRzL01pY3Jvc29mdFJv
// SIG // b3RDZXJ0LmNydDANBgkqhkiG9w0BAQUFAAOCAgEAWTk+
// SIG // fyZGr+tvQLEytWrrDi9uqEn361917Uw7LddDrQv+y+kt
// SIG // MaMjzHxQmIAhXaw9L0y6oqhWnONwu7i0+Hm1SXL3PupB
// SIG // f8rhDBdpy6WcIC36C1DEVs0t40rSvHDnqA2iA6VW4LiK
// SIG // S1fylUKc8fPv7uOGHzQ8uFaa8FMjhSqkghyT4pQHHfLi
// SIG // TviMocroE6WRTsgb0o9ylSpxbZsa+BzwU9ZnzCL/XB3N
// SIG // ooy9J7J5Y1ZEolHN+emjWFbdmwJFRC9f9Nqu1IIybvyk
// SIG // lRPk62nnqaIsvsgrEA5ljpnb9aL6EiYJZTiU8XofSrvR
// SIG // 4Vbo0HiWGFzJNRZf3ZMdSY4tvq00RBzuEBUaAF3dNVsh
// SIG // zpjHCe6FDoxPbQ4TTj18KUicctHzbMrB7HCjV5JXfZSN
// SIG // oBtIA1r3z6NnCnSlNu0tLxfI5nI3EvRvsTxngvlSso0z
// SIG // FmUeDordEN5k9G/ORtTTF+l5xAS00/ss3x+KnqwK+xMn
// SIG // QK3k+eGpf0a7B2BHZWBATrBC7E7ts3Z52Ao0CW0cgDEf
// SIG // 4g5U3eWh++VHEK1kmP9QFi58vwUheuKVQSdpw5OPlcmN
// SIG // 2Jshrg1cnPCiroZogwxqLbt2awAdlq3yFnv2FoMkuYjP
// SIG // aqhHMS+a3ONxPdcAfmJH0c6IybgY+g5yjcGjPa8CQGr/
// SIG // aZuW4hCoELQ3UAjWwz0wggYHMIID76ADAgECAgphFmg0
// SIG // AAAAAAAcMA0GCSqGSIb3DQEBBQUAMF8xEzARBgoJkiaJ
// SIG // k/IsZAEZFgNjb20xGTAXBgoJkiaJk/IsZAEZFgltaWNy
// SIG // b3NvZnQxLTArBgNVBAMTJE1pY3Jvc29mdCBSb290IENl
// SIG // cnRpZmljYXRlIEF1dGhvcml0eTAeFw0wNzA0MDMxMjUz
// SIG // MDlaFw0yMTA0MDMxMzAzMDlaMHcxCzAJBgNVBAYTAlVT
// SIG // MRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdS
// SIG // ZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9y
// SIG // YXRpb24xITAfBgNVBAMTGE1pY3Jvc29mdCBUaW1lLVN0
// SIG // YW1wIFBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCC
// SIG // AQoCggEBAJ+hbLHf20iSKnxrLhnhveLjxZlRI1Ctzt0Y
// SIG // TiQP7tGn0UytdDAgEesH1VSVFUmUG0KSrphcMCbaAGvo
// SIG // e73siQcP9w4EmPCJzB/LMySHnfL0Zxws/HvniB3q506j
// SIG // ocEjU8qN+kXPCdBer9CwQgSi+aZsk2fXKNxGU7CG0OUo
// SIG // Ri4nrIZPVVIM5AMs+2qQkDBuh/NZMJ36ftaXs+ghl374
// SIG // 0hPzCLdTbVK0RZCfSABKR2YRJylmqJfk0waBSqL5hKcR
// SIG // RxQJgp+E7VV4/gGaHVAIhQAQMEbtt94jRrvELVSfrx54
// SIG // QTF3zJvfO4OToWECtR0Nsfz3m7IBziJLVP/5BcPCIAsC
// SIG // AwEAAaOCAaswggGnMA8GA1UdEwEB/wQFMAMBAf8wHQYD
// SIG // VR0OBBYEFCM0+NlSRnAK7UD7dvuzK7DDNbMPMAsGA1Ud
// SIG // DwQEAwIBhjAQBgkrBgEEAYI3FQEEAwIBADCBmAYDVR0j
// SIG // BIGQMIGNgBQOrIJgQFYnl+UlE/wq4QpTlVnkpKFjpGEw
// SIG // XzETMBEGCgmSJomT8ixkARkWA2NvbTEZMBcGCgmSJomT
// SIG // 8ixkARkWCW1pY3Jvc29mdDEtMCsGA1UEAxMkTWljcm9z
// SIG // b2Z0IFJvb3QgQ2VydGlmaWNhdGUgQXV0aG9yaXR5ghB5
// SIG // rRahSqClrUxzWPQHEy5lMFAGA1UdHwRJMEcwRaBDoEGG
// SIG // P2h0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2kvY3Js
// SIG // L3Byb2R1Y3RzL21pY3Jvc29mdHJvb3RjZXJ0LmNybDBU
// SIG // BggrBgEFBQcBAQRIMEYwRAYIKwYBBQUHMAKGOGh0dHA6
// SIG // Ly93d3cubWljcm9zb2Z0LmNvbS9wa2kvY2VydHMvTWlj
// SIG // cm9zb2Z0Um9vdENlcnQuY3J0MBMGA1UdJQQMMAoGCCsG
// SIG // AQUFBwMIMA0GCSqGSIb3DQEBBQUAA4ICAQAQl4rDXANE
// SIG // Nt3ptK132855UU0BsS50cVttDBOrzr57j7gu1BKijG1i
// SIG // uFcCy04gE1CZ3XpA4le7r1iaHOEdAYasu3jyi9DsOwHu
// SIG // 4r6PCgXIjUji8FMV3U+rkuTnjWrVgMHmlPIGL4UD6ZEq
// SIG // JCJw+/b85HiZLg33B+JwvBhOnY5rCnKVuKE5nGctxVEO
// SIG // 6mJcPxaYiyA/4gcaMvnMMUp2MT0rcgvI6nA9/4UKE9/C
// SIG // CmGO8Ne4F+tOi3/FNSteo7/rvH0LQnvUU3Ih7jDKu3hl
// SIG // XFsBFwoUDtLaFJj1PLlmWLMtL+f5hYbMUVbonXCUbKw5
// SIG // TNT2eb+qGHpiKe+imyk0BncaYsk9Hm0fgvALxyy7z0Oz
// SIG // 5fnsfbXjpKh0NbhOxXEjEiZ2CzxSjHFaRkMUvLOzsE1n
// SIG // yJ9C/4B5IYCeFTBm6EISXhrIniIh0EPpK+m79EjMLNTY
// SIG // MoBMJipIJF9a6lbvpt6Znco6b72BJ3QGEe52Ib+bgsEn
// SIG // VLaxaj2JoXZhtG6hE6a/qkfwEm/9ijJssv7fUciMI8lm
// SIG // vZ0dhxJkAj0tr1mPuOQh5bWwymO0eFQF1EEuUKyUsKV4
// SIG // q7OglnUa2ZKHE3UiLzKoCG6gW4wlv6DvhMoh1useT8ma
// SIG // 7kng9wFlb4kLfchpyOZu6qeXzjEp/w7FW1zYTRuh2Pov
// SIG // nj8uVRZryROj/TGCBKUwggShAgEBMIGQMHkxCzAJBgNV
// SIG // BAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYD
// SIG // VQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQg
// SIG // Q29ycG9yYXRpb24xIzAhBgNVBAMTGk1pY3Jvc29mdCBD
// SIG // b2RlIFNpZ25pbmcgUENBAhMzAAAAiFkOPFEf4mpnAAEA
// SIG // AACIMAkGBSsOAwIaBQCggb4wGQYJKoZIhvcNAQkDMQwG
// SIG // CisGAQQBgjcCAQQwHAYKKwYBBAGCNwIBCzEOMAwGCisG
// SIG // AQQBgjcCARUwIwYJKoZIhvcNAQkEMRYEFMdWpAb5FA3R
// SIG // o5W541nilvzcHwtLMF4GCisGAQQBgjcCAQwxUDBOoCaA
// SIG // JABNAGkAYwByAG8AcwBvAGYAdAAgAEwAZQBhAHIAbgBp
// SIG // AG4AZ6EkgCJodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20v
// SIG // bGVhcm5pbmcgMA0GCSqGSIb3DQEBAQUABIIBAF2mIeuS
// SIG // nvoevwHgNbWlQYL+egvo/EIfUQnimaWp4Zq8sYyARMPo
// SIG // UtK0YKPX83qTU/EFZEAdbGnOBtVC8xBnRKqVOZIpJRH6
// SIG // YvY1G3TrkvCIRWC8l3ke66YFnaPe0VHoZ4QdPiWIJKLN
// SIG // cnPECIw0wsFkmjEjL1+IL9slGW4TP/MgZOyWcG+4qpQb
// SIG // ECi4Jt3mWXXv3fWz/qG/i5fGG/ZU7TOVS3vZ7+h7sdUG
// SIG // JozA+ZCz1iRVORYUVgx1dD4/5W00FQQW4DglNzt2HH5G
// SIG // 3kb/+woqPaUegTzlZg7nBZrccqbmgW4qPUnj+JAR1C6T
// SIG // hXXERt9ueuMMS1k02GJ+vqhtwUShggIoMIICJAYJKoZI
// SIG // hvcNAQkGMYICFTCCAhECAQEwgY4wdzELMAkGA1UEBhMC
// SIG // VVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcT
// SIG // B1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jw
// SIG // b3JhdGlvbjEhMB8GA1UEAxMYTWljcm9zb2Z0IFRpbWUt
// SIG // U3RhbXAgUENBAhMzAAAAKzkySMGyyUjzAAAAAAArMAkG
// SIG // BSsOAwIaBQCgXTAYBgkqhkiG9w0BCQMxCwYJKoZIhvcN
// SIG // AQcBMBwGCSqGSIb3DQEJBTEPFw0xMjA5MjYxOTM0MDZa
// SIG // MCMGCSqGSIb3DQEJBDEWBBTLe3tOLagISrS+Y8petC5w
// SIG // JO5UDzANBgkqhkiG9w0BAQUFAASCAQBbALRMfIgWelGm
// SIG // 7BBocauCJHCI9O+AIzBHdl8g5FSPTA+/HKxGDwG/rJ0p
// SIG // MAQVg9ZZ5KNi9tNOpJ+GF7abj1djVEgn5iCvFNvdWoFF
// SIG // n+SYO1Yl/EbfCTwU5uCmydqsEND5Anv64OKTnLyZQKh3
// SIG // LpEAFVY95moRrvrThLczDRVC9yF0cT8iabzsquQPy0+1
// SIG // n8MLY2ThphYxyHGLAMWvwMVsi5injPfRBWRRtIu+M36e
// SIG // j0FWWSXKh+Ec8S5X0pe+4dV19UWUYYrFfkdf44efONqQ
// SIG // eZElB4q/S/eJaLkQp6ZXXwW3vlmuuSBrN7aDsO4C2uXg
// SIG // NJpr1/x3J0IuecJ9p3WR
// SIG // End signature block
