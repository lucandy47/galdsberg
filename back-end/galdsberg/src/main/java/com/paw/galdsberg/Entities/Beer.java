package com.paw.galdsberg.Entities;

import javax.persistence.*;

@Entity
@Table(name = "products")
public class Beer{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name="quantity")
    private String quantity;

    @Column(name = "alc_vol")
    private String alc_vol;

    @Column(name = "country")
    private String country;

    @Column(name = "price")
    private double price;

    @Column(name = "description")
    private String description;

    @Column(name = "img_name")
    private String img_name;

    @Column(name = "type")
    private String type;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAlc_vol() {
        return alc_vol;
    }

    public void setAlc_vol(String alc_vol) {
        this.alc_vol = alc_vol;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImg_name() {
        return img_name;
    }

    public void setImg_name(String img_name) {
        this.img_name = img_name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }
}
