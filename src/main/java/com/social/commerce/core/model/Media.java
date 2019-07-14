package com.social.commerce.core.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Media {

    @Id
    @GeneratedValue
    private long id;
    private String fileName;

    @ManyToOne
    private MediaFolder folder;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public MediaFolder getFolder() {
        return folder;
    }

    public void setFolder(MediaFolder folder) {
        this.folder = folder;
    }
}
