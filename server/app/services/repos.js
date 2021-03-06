'use strict';
console.log('docker service started');

var p = require('child_process');
var $q = require('q');
var path = require('path');

var exec = p.exec;
var spawn = p.spawn;
var fs = require('fs');
var packagePath = process.cwd();

var reposPath = getUserHome() + '/.git-gui/repos'; //`${packagePath}/settings/repos`
var blamePath = `${packagePath}/app/bash/better-blame.sh`
// /usr/src/app/bash
exports.addRepo = (name, path)=> {

    var homePath = getUserHome();
    var reposDir = `${homePath}/.git-gui`
    var fileName = reposDir + `/repos`;


    if (!fs.existsSync(reposDir)) {
    mkdirp(reposDir, function (err) {
        if (err) console.error(err)
        else console.log('created setting directory')
    });

    }

    fs.appendFile(fileName, `${name}\t${path}\n`, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    return true;
}

exports.getRepos = ()=>{
    var repos = getRepos();
    var vals = Object.keys(repos).map(function(key) {
        return repos[key];
    });
     return vals;
}

function getRepos() {
    console.log(reposPath);
    let data = fs.readFileSync(reposPath);
    let repos = [];
    data.toString().split("\n").forEach((line)=> {
        var item = line.split('\t');
        repos.push(new Repo(item[0], item[1]));
    })
    console.log(repos);
    return repos.reduce(function(result, item) {
        result[item.name] = item; //a, b, c
        return result;
    }, {});

}

exports.getFile = (repo, branch, path) => {
    var deferred = $q.defer();
    var repos = getRepos();

    var repoPath = repos[repo].path;
    var filePath = repoPath + '/' + path;


    fs.readFile(filePath, function(err, data) {
        if (err) throw err;
        deferred.resolve(data.toString());
    });
    return deferred.promise;
}

//todo: branchs
exports.getFiles = (repo, branch, path) => {
    var deferred = $q.defer();
    var cmd = blamePath;
    console.log(`blame path: ${blamePath}`);
    var repos = getRepos();
    var repoPath = repos[repo].path;
    var workingDir = repoPath + '/' + path;

    exec(cmd, {cwd: workingDir}, (err, data, derr) => {
        let files = [];
        let folders = [];
        //todo: remove empty item 
        let items = data.split('\n');
        items.forEach(row=>{
            var item = new File(...row.split('|'))
            if(item.size === '-') { //folder
                folders.push(item);
            }else {
                files.push(item);
            }
        })
        deferred.resolve(folders.concat(files));
    });
    return deferred.promise;
}

class Repo{
    constructor(name,path) {
        this.name = name;
        this.path = path;
    }
}

class File{
    constructor(name,lastModifiedDate, changedBy, commitMessage, size) {
        console.log(lastModifiedDate);
        this.name = name;
        // this.path = path;
        this.lastModifiedDate = lastModifiedDate;
        this.changedBy = changedBy;
        this.commitMessage = commitMessage;
        this.size = size;
    }
}


function getUserHome() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

