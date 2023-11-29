const fs = require("fs/promises"); // fs.promises를 사용하여 fs 모듈 가져오기
const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
  ListObjectsCommand,
  DeleteObjectsCommand,
} = require("@aws-sdk/client-s3");
const { fromIni } = require("@aws-sdk/credential-provider-ini");

const s3Client = new S3Client({
  region: "ap-northeast-2",
  credentials: fromIni({}),
});

module.exports = {
  upload: async function (path, name, type, tempDir) {
    try {
      const params = {
        Bucket: "encryptionstorage",
        Key: `${path}${name}`,
        ACL: "public-read",
        Body: await fs.readFile(tempDir), // 파일을 읽어와서 Body로 전달
        ContentType: type,
      };
      const command = new PutObjectCommand(params);
      const data = await s3Client.send(command); // send 메서드를 사용하여 업로드
      console.log(data);
      return data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
  creatDir: async function (name, path = "") {
    try {
      const params = {
        Bucket: "encryptionstorage",
        Key: `${path}${name}/`,
        ACL: "public-read",
        Body: "", // 빈 Body를 전달
      };
      const command = new PutObjectCommand(params);
      const data = await s3Client.send(command);
      console.log(data);
      return data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
  download: async function (key, tempDir) {
    try {
      const params = {
        Bucket: "encryptionstorage",
        Key: key,
      };
      const command = new GetObjectCommand(params);
      const { Body } = await s3Client.send(command); // send 메서드를 사용하여 객체를 가져옴
      await fs.writeFile(tempDir, Body); // 파일을 쓰기
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
  deleteFile: async function (key) {
    try {
      const params = {
        Bucket: "encryptionstorage",
        Key: key,
      };
      const command = new DeleteObjectCommand(params);
      const data = await s3Client.send(command);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  },
  deleteFolder: async function (key) {
    try {
      const params = {
        Bucket: "encryptionstorage",
        Prefix: key + "/",
      };
      const listCommand = new ListObjectsCommand(params);
      const { Contents } = await s3Client.send(listCommand);

      if (Contents.length === 0) return;

      const deleteParams = {
        Bucket: "encryptionstorage",
        Delete: { Objects: Contents.map((content) => ({ Key: content.Key })) },
      };
      const deleteCommand = new DeleteObjectsCommand(deleteParams);
      await s3Client.send(deleteCommand);
    } catch (err) {
      console.error(err);
    }
  },
};
