// firebase.js
const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.cert({
    type: "service_account",
    project_id: "cmsforproject",
    private_key_id: "3c83f632a7a861758679d5e8f77b82614d9ac8e7",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC9CaYyWnmtCvrA\nCtPAPMe85IBXwtFUbl0j8Kg7bRDWzsZ+E1P7g2RJ3TpPxveJ4XVrPwBBSO3fs0LN\nPjB0sho0Jr75uIndT2nuOlHxsWzEWmZLFB5IGDs22kJCdLtRMtlH12v9/KkISHig\nyTPlKNCK8wAYXtlhikDiJJvosD+HpR+eJ/ppRpuMGRXdnDP1JkhKy04Ym+DypCA2\n+956rD5E1QLnAAIPhBOtjHtT35ZVxip6v+sPN2oyCBMzdjDykHYDNxB9Wb6O8xZ7\nSUjb2ZHoV4WTyaEZMWwK2/W9doV+o+FEYqy+wv9GHWlw6Tq+nYRoIkSM+mJRoHcK\nCYJeigzdAgMBAAECggEAAy19WLgCoZu0pAkf5B8MGysa097XgVGASVFgp+xpGGNO\nHOJwSqMRIC4S2TJ2s3T8cfq+I1rO0jAuPaBU/4aFlZOCfv97ec09nPPoBWW+dqfa\nXlq5OOxcr8sIIBvcO5IyQC3pMnzOeUWBREVS6lWUTob6h8Otvcutft+vVesDNmF9\n0CJF3dKh7521lp7xwSt/ojhQJBg7KJZFks4bqAuFjybO5ojZbSyBIWjN1vHl/v6G\nh4JcQnriZiMQO5jtEDPsJMC2hkztdoANKx+BYwcB05yLm5BtUJwMdRzY2Yy9fJX7\n7VlepLf9xF5584S0d9lhBldbVC1R+xyUGJ5PCEYk1QKBgQDd7JqX6taTi6g5In0X\nOxDZdRQBPZliX+XXG/P/GRd6mLPnAHmccDHp+Px4aojfv3w78en+mJjU9dKa88ft\nzYPIHMl/uDwJJxPI4E8Pd52m4ePIzlDdrgcaUxgg3zGkTpAOnUSz6mmoXlch9rNm\npQO9HNR6qMKJwNELQUdlqJq4CwKBgQDaEFdlakKKsZfakBX2W8IOT0K4CmfATNpx\ncYxfxYnbc1grd6mmS3MW5yh4Fj99SvSbGo99gKfUIF8OcSPEoA6JByYVm6XvekPr\nz/USJrfO120GaKsjsN7vxd58ZV/Tol/Eji8Xj1dKRfwdpqx/dtGT7UIXdU1D5m07\nowT2Y2aXtwKBgQCppAC0mjY2iS4pppx6kpMZt254WE8UrPuzyFFmshaJh4sVzP4p\nQHZXRRYxMja42tYruIvHK3zAZbz859bviAbxhFffQsTZtj5gcl7dEvG3LLuDt3qH\nSk1xqQ0rq5F16Pwjv8JRyaHEq4DtnHicwQ0vlYcy0CgNRxBFCzx5kD3c6wKBgQDO\npdHMn6gzexzm2MiXUFlT6jTV57Zue+Y+v1ZBpBeCSYpyltHEb5e/SowFUUAVYiTv\nn3n/ex6QXaT3MKyutudPX+DtdTUI/prDK62Y5+wkLe55tlMIXaLHIoI27HKlQijz\nQbLK5uHX1v6Wss6hdF4jiyGozVbNU96MN26Kd6RPfQKBgGW7j3svMDWzE0e92WRS\nFFg6aisGO95+R8xvIexU7e4SwV3kDNaZqy3vnim4hdEelsCyeG4iHz+a3L0sQzZs\nGu2FHorRjxsi/2zU1lzxS2L2oMYPvZb/SAw5vsF0P7LFFHCfLxru4MmLesXe9I+V\nG4UAIita56n7so2LCdZ1otwe\n-----END PRIVATE KEY-----\n".replace(/\\n/g, '\n'),
    client_email:"firebase-adminsdk-zp07d@cmsforproject.iam.gserviceaccount.com",
    client_id:100793993073577089614,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-zp07d%40cmsforproject.iam.gserviceaccount.com",
  }),
  storageBucket: 'cmsforproject.appspot.com'
});

const bucket = admin.storage().bucket();

module.exports = bucket;

